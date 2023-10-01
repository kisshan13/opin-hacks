const useSubdomain = () => {
  return window.location.host.split(".")[0];
};

export default useSubdomain;
