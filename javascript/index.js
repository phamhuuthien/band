var a = document.getElementById('show_search_advance');
var category = document.getElementById('search_advance');

// Lấy nội dung của thẻ a
var text = a.innerHTML;

 function show_search_advance()
    {
        // Lấy thẻ a và category
        
        // Kiểm tra xử lý hiển thị và ẩn + đổi nội dung thẻ a
        if (text == 'Tìm kiếm nâng cao'){
            category.style.display = "table-row";
            a.innerHTML = "Bỏ tìm kiếm nâng cao";
        }
        else{
            category.style.display = "none";
            a.innerHTML = "Tìm kiếm nâng cao";
        }
     
        // Return false để khi click vào thẻ a sẽ không bị chuyển trang
        return false;
    }

    a.onclick = show_search_advance;

