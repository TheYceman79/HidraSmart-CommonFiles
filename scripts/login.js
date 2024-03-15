
var fadeMixinNotTime = Swal.mixin({
    icon: 'warning',
    title: 'General Title',
    animation: false,
    showClass: {
        popup: 'animated fadeInDown faster',
        icon: 'animated heartBeat delay-1s'
    },
    hideClass: {
        popup: 'animated fadeOutUp faster',
    },
    customClass: {
        popup: 'custom-dialog-class'
      }
});

async function login(token) {
    grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute('6Lf3o3opAAAAAH0GHlp_LuajXdK_Ur8HCR8_vLqX', {action: 'LOGIN'});
        var username = $('#input-email').val();
        var password = $('#input-pass').val();
        let loginResult = await fetch(
            `/login`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token, username: username, password: password }),
            }
        );
        if (loginResult.ok) {
            const responseData = await loginResult.json();
            const route = responseData.route;
            window.location.href = route;
        }else{
            const errorResponse = await loginResult.json();
            const errorMessage = errorResponse.message;
            console.log(errorMessage);
            failedLogin(errorMessage);
        }
        
    });
}

function failedLogin(message) {
    fadeMixinNotTime.fire({
        icon: "",
        title:
            '<img class="img_login_error" src="https://cdn.jsdelivr.net/gh/HidralabIyD/HidraSmart-CommonFiles@latest/icon/login_error.png" width="60" height="60">',
        html: `<p>`+ message +`</p>`,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "ACEPTAR",
        confirmButtonColor: "#3a677c",
        customClass: {
            confirmButton: 'custom-confirm-button-class'
        },
    });
}