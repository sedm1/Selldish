<template>
  <div class="modal__bg">
    <div class="modal__window">
        <button 
        class="closebutton"
        @click="$emit('closeModal')"
        ><img src="../assets/img/close.png" alt="close"></button>
        <h2 class="modal__title">Вход в учетную запись</h2>
        <form action="" class="login__form">
            <input type="text" placeholder="Введите логин">
            <input type="password" placeholder="Введите пароль">
            <button 
            type="button"
            @click="giveNotification"
            >Войти</button>
        </form>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
    name: "VLoginPopup",
    setup(){
        const toast = useToast();
        return { toast }
    },
    methods: {
        giveNotification(){
            this.toast.error("К сожалению, авторизация находиться в разработке");
        }
    }
}
</script>

<style lang="sass" scoped>
.closebutton
    position: absolute
    top: -8px
    right: -8px
    width: 20px
    height: 20px
    user-select: none
.modal__bg
    position: fixed
    top: 0px
    left: 0px
    +flexa 
    background-color: rgba(0,0,0,0.4)
    z-index: 10000
    width: 100%
    height: 100%
    justify-content: center
.modal__window
    padding: 20px 25px
    border-radius: 10px
    background: $white
    max-width: 500px
    width: 100%
    position: relative
.modal__title
    font-weight: 600
    text-align: center
    margin-bottom: 25px
    user-select: none
.login__form
    display: flex
    flex-direction: column
    input
        width: 100%
        border: 2px solid $gray
        border-radius: 10px
        padding: 15px 10px
        font-size: 16px
        color: $gray
        font-weight: 500
        margin-bottom: 15px
    button
        background-color: $orange
        border-radius: 10px
        width: 100%
        padding: 15px 0px
        color: $white
        color: $white
        foont-size: 16px
        font-weight: 500
@media screen and (max-width: $mobileContainer)
    .modal__window
        width: 96%
</style>