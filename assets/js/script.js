function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let address = document.getElementById("address").value

    if(name == "") {
        return alert("name harus diisi")
    } else if(email == ""){
        return alert("email harus diisi")
    } else if(phone == ""){
        return alert("telepon harus diisi")
    } else if(subject == ""){
        return alert("pesan harus diisi")
    } else if(address == ""){
        return alert("alamat harus diisi")
    } 
        
    const emailReceiver = "farhanhadyaan@gmail.com"
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo Nama Saya ${name},alamat saya ${address}, bisakah anda menghubungi saya di ${phone}`
    a.click()

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(address)
}
