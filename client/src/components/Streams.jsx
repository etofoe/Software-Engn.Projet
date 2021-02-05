import Menu from "./Menu";

const Streams = () => {
  return (
    <>
      <Menu />
      <div className="streams-page ui container">
        <h2><i className="ui video red icon"></i> Live Streaming Videos</h2>
        <div className="ui stackable celled two column grid">
          <div className="column">
            <div className="ui centered segment">
              <video crossOrigin="true" controls width={'100%'} autoPlay={true}>
                <source
                  src="https://youtu.be/nmvxdEqoYAM"
                  type="video/webm"
                />
                <source
                  src="https://www.youtube.com/watch?v=nmvxdEqoYAM"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
          <div className="column">
            <div className="ui centered segment">
              <video controls width={"100%"} autoPlay={true}>
                <source
                  src="https://youtu.be/nmvxdEqoYAM"
                  type="video/webm"
                />
                <source
                  src="https://www.youtube.com/watch?v=nmvxdEqoYAM"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
          <div className="column">
            <div className="ui centered segment">
              <video controls width={"100%"} autoPlay={true}>
                <source
                  src="https://youtu.be/nmvxdEqoYAM"
                  type="video/webm"
                />
                <source
                  src="https://www.youtube.com/watch?v=nmvxdEqoYAM"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
          <div className="column">
            <div className="ui centered segment">
              <video controls width={"100%"} autoPlay={true}>
                <source
                  src="https://youtu.be/nmvxdEqoYAM"
                  type="video/webm"
                />
                <source
                  src="https://www.youtube.com/watch?v=nmvxdEqoYAM"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Streams;
