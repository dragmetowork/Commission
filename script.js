// โค้ดใน script.js (ใส่บน GitHub)

// วาง URL ของ Web App ที่ก๊อปปี้มาจาก Google Script ตรงนี้
const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxBvbXELIDEVe_VkmedB7TN-YQDpiGKiOlGR4dFSPT6TOVMgjJ6O3FeD0dWV7kxX2tPOA/exec";

// ฟังก์ชันสำหรับส่งข้อมูลจากหน้าเว็บ GitHub ไปให้ Google Script
function sendDataToGoogleScript(nameData, emailData) {
    
    const payload = {
        name: nameData,
        email: emailData
    };

    // ใช้ fetch ยิงข้อมูลข้ามค่ายไปหา Google
    fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'cors', // อนุญาตให้ส่งข้ามโดเมน
        headers: {
            'Content-Type': 'text/plain', // ใช้ text/plain เพื่อหลีกเลี่ยงปัญหา CORS preflight 
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === "success") {
            alert("เย้! " + data.message);
        } else {
            alert("เกิดข้อผิดพลาด: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("ไม่สามารถติดต่อเซิร์ฟเวอร์ได้");
    });
}
