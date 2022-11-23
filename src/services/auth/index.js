const loginUser = (body) => {
  return {
    method: "POST",
    url: "login",
    body: JSON.stringify(body),
  };
};

const auth = {
  loginUser,
};
export default auth;
