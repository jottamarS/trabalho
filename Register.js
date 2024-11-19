const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert(error.message);
    }
  };
  
