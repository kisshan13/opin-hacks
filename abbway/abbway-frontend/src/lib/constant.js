const Modal = {
  userOnBoard: "userOnBoard",
};

const Modes = {
  userOnBoard: {
    login: "login",
    verify: "verify",
    signup: "signup",
  },

  companyOnBoard: {
    login: "login",
    signup: {
      details: "details",
      credentails: "credentials",
    },
  },
};

const subdomains = {
  users: "localhost:5173",
  business: "business",
};

export { Modal, Modes, subdomains };
