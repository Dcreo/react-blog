const SignUp = () => {
  return(
    <form>
      <div className="flex flex-col gap-y-[10px] max-w-[400px] mx-auto">
        <div className="flex flex-col">
          <label>Email:</label>
          <input type="text" name="email" placeholder="Введите свой email" />
        </div>
        <div className="flex flex-col">
          <label>Пароль:</label>
          <input type="password" name="password" placeholder="Введите свой пароль" />
        </div>
        <div className="flex flex-col">
          <label>Повторите пароль:</label>
          <input type="password" name="confirm" placeholder="Повторите пароль" />
        </div>
        <div>
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </form>
  )
}

export default SignUp;
