
let projects = []


const getProject = (event) => { //event adalah parameter yg dideklarasi sebagai event
    event.preventDefault()

    // bikin variabel nampung data inputan form
    let projectName = document.getElementById("project-name").value; // value ini adalah nilai dari semua data yg ada
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("project-description").value;
    let tech1 = document.getElementById("tech1")
    let tech2 = document.getElementById("tech2")
    let tech3 = document.getElementById("tech3")
    let tech4 = document.getElementById("tech4")
    let uploadImage = document.getElementById("upload-image").files;

    


    if (projectName == "") {
        return alert ("Project name is required")
    } else if (startDate == "") {
        return alert ("Date start is required")
    } else if (endDate == "") {
        return alert ("Date end is required")
    } else if (description == "") {
        return alert ("Description is required")
    } else if ( tech1.checked == '' && tech2.checked == '' && tech3.checked == '' && tech4.checked == '') {
        return alert ("Technologies is required")
    } else if (uploadImage.length == 0){
        return alert('Image is null')
    }
    
    // Mengubah spesifik dari image menjadi sebuah blob object
    uploadImage = URL.createObjectURL(uploadImage[0])


    // Bikin Variable untuk menampung data output
    let dataProject = {
        projectName,
        startDate,
        endDate,
        description,
        tech1 : tech1.checked == true ? true : false,
        tech2 : tech2.checked == true ? true : false,
        tech3 : tech3.checked == true ? true : false,
        tech4 : tech4.checked == true ? true : false,
        uploadImage,
      
    }

    // Melakukan method PUSH untuk mengirimkan data
    projects.push(dataProject)
    showProject()
    console.log(projects)
}

const showProject = () => {
    document.getElementById("postProject").innerHTML =''
    
    for (let i = 0; i < projects.length; i++){
        document.getElementById("postProject").innerHTML += `
        <div class="card">
        <img src="${projects[i].uploadImage}" alt="post" />
        <a class = "details" href="blogdetails.html">${projects[i].projectName}</a>
        <p>durasi : 3 bulan </p>
        <p>${projects[i].description}</p>
        <div class="technologyIcon">
        ${projects[i].tech1 ? '<img src="./assets/images/js.png" alt="tech1">' : ''}
        ${projects[i].tech2 ? '<img src="./assets/images/go.png" alt="tech2">' : ''}
        ${projects[i].tech3 ? '<img src="./assets/images/python.png" alt="tech3">' : ''}
        ${projects[i].tech4 ? '<img src="./assets/images/figma.png" alt="tech4">' : ''}
        </div>
        <div class="action">
        <button>edit</button>
        <button>delete</button>
        </div>
        </div>`;
    }
    console.log(showProject)
}