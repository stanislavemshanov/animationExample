const FadeTransition = (index, position) => {
  const sceneRange = [index - 1, index];
  const outputOpacity = [0, 1];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity
  });

  return {
    opacity: transition
  };
};

const transitionConfig = () => {
	return {
	  screenInterpolator: sceneProrps => {
		const position = sceneProps.position;
		const scene = sceneProps.scene;
		const index = scene.index;
  
		return FadeTransition(index, position);
	  }
	};
  };

const transitionConfig = () => {
  return {
    screenInterpolator: sceneProrps => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      const sceneRange = [index - 1, index];
      const outputOpacity = [0, 1];
      const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputOpacity
      });
      return {
        opacity: transition
      };
    }
  };
};

