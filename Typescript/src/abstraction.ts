// abstraction

// interface MediaPlayer {
//   paly(): void;
//   pause(): void;
//   stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//   paly(): void {
//     console.log(`Playing Music .....`);
//   }

//   pause(): void {
//     console.log(`Music Puased.....`);
//   }

//   stop(): void {
//     console.log(`Music Stopped.....`);
//   }
// }

// const myPlayer = new MusicPlayer();

// myPlayer.paly();

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MyPlayer extends MediaPlayer {
  play(): void {
    console.log(`Playing Music .....`);
  }

  pause(): void {
    console.log(`Music Puased.....`);
  }

  stop(): void {
    console.log(`Music Stopped.....`);
  }
}

const myPlayer1 = new MyPlayer()

myPlayer1.play()
