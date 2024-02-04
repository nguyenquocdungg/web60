function validateForm() {
    var nameInput = document.getElementById('nameInput').value;
    var emailInput = document.getElementById('emailInput').value;
    var phoneInput = document.getElementById('phoneInput').value;
    var messageInput = document.getElementById('messageInput').value;

    if (nameInput === '' && phoneInput === '') {
        alert('Họ Tên và số điện thoại là bắt buộc. Vui lòng nhập đủ thông tin.');
    } else if (nameInput === '') {
        alert('Họ và Tên là bắt buộc. Vui lòng nhập đủ thông tin.');
    } else if (phoneInput === '' || phoneInput.length !== 10) {
        alert('Số điện thoại không hợp lệ. Vui lòng nhập đủ thông tin.');
    } else if (emailInput === '') {
        alert('Email là bắt buộc. Vui lòng nhập đủ thông tin.');
    } else {
        alert('Đăng ký thành công');

    }
}