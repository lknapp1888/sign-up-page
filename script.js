const USER_PASSWORD_CONFIRM = document.getElementById('password-confirm');
const USER_PASSWORD = document.getElementById('password');
const PASSWORD_CONF_SPAN = document.getElementById('passValMessage');


USER_PASSWORD_CONFIRM.addEventListener('keypress', e => {
    if (e.key === 'Enter') return;
    passwordValMessage(USER_PASSWORD.value, USER_PASSWORD_CONFIRM.value + e.key)
            }
    );

USER_PASSWORD.addEventListener('keypress', e => {
    if (e.key === 'Enter') return;
    passwordValMessage(USER_PASSWORD.value + e.key, USER_PASSWORD_CONFIRM.value)
            }
    );

USER_PASSWORD_CONFIRM.addEventListener('keydown', e => {
    passwordValMessage(USER_PASSWORD.value, USER_PASSWORD_CONFIRM.value.slice(0, -1))
            }
    );

USER_PASSWORD.addEventListener('keydown', e => {
    passwordValMessage(USER_PASSWORD.value.slice(0, -1), USER_PASSWORD_CONFIRM.value)
            }
    );




function passwordValMessage(passOne, passTwo) {
if ((USER_PASSWORD.value === '') ||  (USER_PASSWORD_CONFIRM.value === '')) return;
    if (passOne === passTwo) {
    PASSWORD_CONF_SPAN.textContent = '✓ Passwords match';
    PASSWORD_CONF_SPAN.style.color = 'green';
    return;
    }
    PASSWORD_CONF_SPAN.textContent = "✖ Passwords do not match";
    PASSWORD_CONF_SPAN.style.color = 'red';
    return;
        }