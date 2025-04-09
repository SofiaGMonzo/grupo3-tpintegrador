
const userController = {
  loginProcess: function (req, res) {
    const userId = req.params.id;
    console.log('Login process for user ID:', userId);
    res.send(`Login procesado para el usuario con ID: ${userId}`);
  },

  registerProcess: function (req, res) {
    const userName = req.params.name;
    console.log('Register data:', userName);
    res.send(`Registro procesado para el usuario: ${userName}`);
  },

  profile: function (req, res) {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID: ${userId}`);
  }
};

module.exports = userController;