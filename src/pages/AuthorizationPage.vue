<template>
  <div class="container">
    <h1>LeadHit</h1>
    <form @submit="submitForm" ref="form">
      <input type="text" @input="setIdValue" placeholder="Ввидите id" />
      <span>id сайта должен содержать 24 символа</span>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    setIdValue(event) {
      this.$store.commit('setIdState', event.target.value)
      if (this.$refs.form.classList.contains('invalid')) {
        this.$refs.form.classList.remove('invalid')
      }
    },
    submitForm(event) {
      event.preventDefault()
      if (this.$store.state.id.split('').length !== 24) {
        event.target.classList.add('invalid')
        return
      }
      fetch('https://track-api.leadhit.io/client/test_auth', {
        headers: {
          "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
          "Leadhit-Site-Id": this.$store.state.id
        }
      })
      .then(response => {
        if(response.ok) {
          localStorage.setItem('Leadhit-Site-Id', this.$store.state.id)
          this.$router.push('/analytics')
        }
      })
    }
  }
}
</script>

<style>
span {
  display: none;
  position: absolute;
  color: red;
  bottom: 5px;
  left: 25px;
  font-size: 12px;
}

.invalid span {
  display: block;
}

form {
  display: flex;
}

input {
  padding: 10px;
  border: 1px solid #3dcaca;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #fff;
  font-size: 18px;
}

.invalid input {
  border: 1px solid red;
}

input:focus-visible {
  outline: none;
}

button {
  background-color: #3dcaca;
  text-align: center;
  color: #fff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 18px;
  border: none;
  padding: 11px;
  cursor: pointer;
}

button:hover {
  background-color: #3ac2c2;
}
</style>
