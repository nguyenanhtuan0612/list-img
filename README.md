# list-img
React-Native

Vào để test được local thì phải đảm bảo máy tính và điện thoại kết nối cùng một wifi.

Check ip local máy mình (vd: 192.168.0.101 hoặc 192.168.3.20 )

Vào file /src/constants/url.tsx

Sửa baseUrl về đúng ip máy đã check


Để hiển thị được ảnh từ API 

vào file /src/components/screen/ListImage.tsx

sửa uri của Image từ 'exampleImgUrl' thành 'item.url'
