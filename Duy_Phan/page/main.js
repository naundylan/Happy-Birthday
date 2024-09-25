document.addEventListener("DOMContentLoaded", function() {
    const danhSach = document.getElementById('danhSach');
    const conElements = document.querySelectorAll('.con');

    danhSach.addEventListener('click', function(event) {
        const clickedItem = event.target;
        if (clickedItem.tagName === 'LI') {
            const id = clickedItem.id;

            // Xóa border khỏi tất cả các mục
            const allItems = danhSach.querySelectorAll('li');
            allItems.forEach(item => {
                item.classList.remove('active-border');
            });

            // Thêm border cho mục được nhấp
            clickedItem.classList.add('active-border');

            // Ẩn tất cả các phần tử con
            conElements.forEach(element => {
                element.style.display = 'none';
            });

            // Hiển thị phần tử con tương ứng
            const conElement = document.getElementById(`con${id}`);
            if (conElement) {
                conElement.style.display = 'block';
            }
        }
    });

    // Hiển thị phần tử con của mục đầu tiên mặc định và thêm border cho mục đầu tiên
    document.getElementById('con1').style.display = 'block';
    const firstItem = danhSach.querySelector('li');
    if (firstItem) {
        firstItem.classList.add('active-border');
    }
});

function kiemTraCauTraLoi() {
    var cauTraLoiNguoiDung = document.getElementById("quizz").value;

    if (cauTraLoiNguoiDung === "hamster đuôi dài") {
        alert("Chúc mừng! Bạn đã trả lời đúng!, bạn nhận được một cái nịt :)))");
    } else {
        alert("Câu trả lời chưa chính xác. Hãy thử lại!");
    }
}