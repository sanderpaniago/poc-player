import { useEffect, useRef, useState } from "react"

export default function Home() {

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  function setPlayingState(state) {
    setIsPlaying(state)
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying)
  }

  useEffect(()=> {
    if (!audioRef.current) {
        return;
    }

    if (isPlaying) {
        audioRef.current.play()
    } else {
        audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <div>
      <div>
          {isPlaying ? (
              <button onClick={toggleIsPlaying}>Pause</button>
            ): (
              <button onClick={toggleIsPlaying}>Play</button>
            )
            }

            <button>Reload</button>
      </div>
      <audio 
          src='/music.mp3' 
          autoPlay={true} 
          ref={audioRef}
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
      />
    </div>
  )
}
