// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    enrollStudent(num) {
        const index = this.sections.findIndex(
            (section) => section.sectionNum == num);
        if (index >= 0) {
            this.sections[index].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent(num) {
        const index = this.sections.findIndex(
            (section) => section.sectionNum == num);
        if (index >= 0) {
            this.sections[index].enrolled--;
            renderSections(this.sections);
        }
    }
};

function setNameAndNumber(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
};


function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    )
    document.querySelector("#sections").innerHTML = html.join("");
}


document.querySelector(`#enrollStudent`).addEventListener('click', function () {
    const input = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(input);
})
document.querySelector(`#dropStudent`).addEventListener('click', function () {
    const input = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(input);
})

renderSections(aCourse.sections);
setNameAndNumber(aCourse);