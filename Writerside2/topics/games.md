# Quarky Game API

<warning>
<b>The Quarky Game API is still in development.</b> It is mostly finished, but there are a couple features that are missing.
</warning>

On Quarky, you can play games against your friends. You can start a game and submit your score to a channel, at which point other members can attempt to beat it.

The Game API is designed for score-based singleplayer games and is intentionally simplistic so that you can focus on developing the game itself. It provides information about the player and opponent, and allows you to submit the score once the game is finished.

<note>
The Game API uses iframes. Make sure that your security policies allow the game to be iframed by any website.

Why any? It is possible that other [Lightquark](https://lightquark.network) clients will want to implement the Game API, and we want to make sure they're able to.
</note>
<warning>
It is recommended to include a link to the game in your <code>gameQuit</code> message for if the Lightquark client does not support the Game API. If you do, expect the Game API to be unavailable. Unlock Game API-based features when you get a <code>gameStage</code> event.
</warning>

## Testing a game
[Open Quarky](https://nineplus.sh/quarky) and go to a channel. There will be a Games button to the left of the typing area. Click it and paste in the URL to your game, at which point it will open.

## Players
The Game API will send a [message event](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#the_dispatched_event) with data about the players. You can use this data in your game.
<note>
The opponent property is included when a user clicks "Play!" on another user's score. It is not present if the user has started the game from the Games button.

The arena property is the quark the game is being played in. It will have a name and avatar instead of an ID at a later date. Ignore the fact that the ID is there. I have no idea why I put it there.
</note>
<warning>
Do not use this data for authentication! It is for presentation only. The Game API does not provide any authentication system, as it's not needed for its intended use.
</warning>

```json
{
  "type": "gameStage",
  "player": {
    "name": "You",
    "avatar": "https://lightquark.network/defaultUser.webp"
  },
  "opponent": {
    "name": "Hakase",
    "avatar": "https://cdn.lightquark.network/666def51331fb97dd20a0b82",
    "score": 2
  },
  "arena": {
    "id": "638b815b4d55b470d9d6fa1a"
  }
}
```

You can listen to it like this:

```javascript
window.addEventListener('message', function(event) {
    if(event.data.type === "gameStage") {
        // Do stuff here with event.data
    }
});
```

## Ending a game
Once the user is satisfied with their score, you can send a `gameQuit` event. This will immediately quit the game and put the specified message in the typing area.

You can pass a message, their score, the name of the game, and a link to it.

<tip>
You can put parameters in the link in case you want to store additional information about the score.

In the future, you'll be able to do this directly in the data object instead.
</tip>

```javascript
window.parent.postMessage({
    type: "gameQuit", 
    message: "I got 30 points! https://example.com",
    data: {
        "score": 30,
        "name": "Example Game",
        "url": "https://example.com"
    }
})
```

## Resizing the game window

By default, Quarky renders the game as an overlay that takes up 80% of the available width and height. If your game is intended to be played at a specific resolution, you can send a `gameResize` event with your preferred width and height in pixels. 

<warning>
Quarky doesn't check if the specified resolution can fit in the window. If it can't, the game window will appear to cut off. Resize events may be implemented in the future.
</warning>

```javascript
// Resize the game window to 200x200 pixels
window.parent.postMessage({
    type: "gameResize", 
    width: 200, 
    height: 200
})
```