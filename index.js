var heading1 = document.getElementById('list-heading1');
var para1 = document.getElementById("list-para1");
var img1 = document.getElementById("image1");

var heading2 = document.getElementById('list-heading2');
var para2 = document.getElementById("list-para2");
var img2 = document.getElementById("image2");

var heading3 = document.getElementById('list-heading3');
var para3 = document.getElementById("list-para3");
var img3 = document.getElementById("image3");

var heading4 = document.getElementById('list-heading4');
var para4 = document.getElementById("list-para4");
var img4 = document.getElementById("image4");

var heading5 = document.getElementById('list-heading5');
var para5 = document.getElementById("list-para5");
var img5 = document.getElementById("image5");

function search() {
    var disease = document.querySelector("input").value;

    if (disease === "Heart") {
        noneClass();
        // console.log("Heart Disease");
        heading1.innerHTML = "Oxford Hospital";
        para1.innerHTML = "Mobile: +91 7972472130 <br> Address: Building No-305, Lajpat Nagar, Jalandhar - 144001, Near Nakodar Chowk  ";
        img1.setAttribute("src", "img/h1.jpg");

        heading2.innerHTML = "Rattan Hospital";
        para2.innerHTML = "Mobile: +(91)-7942778785 <br> Address: 280, Shaheed Udham Singh Nagar, Jalandhar City, Jalandhar – 144001";
        img2.setAttribute("src", "img/h2.jpg");


        heading3.innerHTML = "Cardionova Institue for medical sciences ";
        para3.innerHTML = "Mobile: +(91)-7947247669 <br> Address: 292 Bj, Lajpat Nagar, Jalandhar - 144001, Near Guru Nanak Mission Chowk";
        img3.setAttribute("src", "img/h3.jpeg");


        heading4.innerHTML = "BBC Heart Care Pruthi Hospital ";
        para4.innerHTML = "Mobile: +91 9915015705, +91 9915015703 <br> Address: 301, Lajpat Nagar, Jalandhar - 144001, Near Guru Nanak Mission Chowk ";
        img4.setAttribute("src", "img/h4.jpeg");


        heading5.innerHTML = "Capitol Hospital ";
        para5.innerHTML = "Mobile: +91 8427584275, +91 9915021515 <br> Address: Jalandhar Pathnkot Road, Pathankot Chowk, Jalandhar - 144012, Near National Highway 44,Near Reru";
        img5.setAttribute("src", "img/h5.jpg");


    }

    else if (disease === "Gynecological") {
        noneClass();
        // console.log("gynecological Disease");
        heading1.innerHTML = "Babies World Ivf Centreg";
        para1.innerHTML = "Mobile: +(91)-794724722922 <br> Address: Gujral Nagar, Maan Scanning Center Road, Jalandhar City, Jalandhar - 144001, Near TV CENTRE,Opp-Easy Day Store ";
        img1.setAttribute("src", "img/g1.jpeg");

        heading2.innerHTML = "Parivaar Ivf Centre";
        para2.innerHTML = "Mobile: +(91)-7947160085 <br> Address: C/O Holy Family Hospital, 70, Shaheed Udham Singh Nagar, Near Radha Krishan Temple, Jalandhar City, Jalandhar - 144001, Opposite Radha Krishan Mandir ";
        img2.setAttribute("src", "img/g2.jpeg");


        heading3.innerHTML = "Pasricha Hospital & Maternity Hospital";
        para3.innerHTML = "Mobile: +(91)-7947160085 <br> Address: Building Number 221, Near Kapurthala Chowk, Adarsh Nagar, Jalandhar - 144001, Opposite Mgn College ";
        img3.setAttribute("src", "img/g3.jpg");


        heading4.innerHTML = "Sanjeevani Health Care Center";
        para4.innerHTML = "Mobile: + (91)-7942593782  <br> Address: Sidharth Nagar, Jalandhar, Jalandhar - 144003, Opp Sk Traders Model House Road";
        img4.setAttribute("src", "img/g4.jpg");


        heading5.innerHTML = "Genesis Fertility and Surgical Centre";
        para5.innerHTML = "Mobile: +91 9357666666, +91 9316299999 <br> Address: Plot No 607 L, Mall Road, Model Town, Jalandhar - 144003, Near Manbro Chowk";
        img5.setAttribute("src", "img/g5.jpg");

    }

    else if (disease === "Orthopaedic") {
        noneClass();
        // console.log("orthopaedic Disease");
        heading1.innerHTML = "Rattan Hospital";
        para1.innerHTML = "Mobile: +(91)-7947247312 <br> Address: 280 Shaheed Udham Singh Nagar, Jalandhar City, Jalandhar - 144001, Near Football Chowk";
        img1.setAttribute("src", "img/o1.jpg");

        heading2.innerHTML = "Orthonova Joint and Trauma Hospital Pvt Ltd";
        para2.innerHTML = "Mobile: +(91)-7527015001 <br> Address: Nakodar Road, Jalandhar City, Jalandhar - 144001, Near Nari Niketan ";
        img2.setAttribute("src", "img/o2.jpg");


        heading3.innerHTML = "KGM Bone Hospital";
        para3.innerHTML = "Mobile <br> Address: 25 Gurjaipal Nagar, Cool Road, Jalandhar City, Jalandhar - 144001, Near Cool Road";
        img3.setAttribute("src", "img/o3.jpg");


        heading4.innerHTML = "Ganga Orthocare Hospital";
        para4.innerHTML = "Mobile: +(91)-9888494545 <br> Address: 10 Basti Adda Road Basti Adda Road, Shakti Nagar, Jalandhar - 144001, Near Raja Hospital,Near Raja Hospital";
        img4.setAttribute("src", "img/o4.jpg");


        heading5.innerHTML = "Satyam Hospital & Trauma center ";
        para5.innerHTML = "Mobile: +(91)-9814124343 <br> Address: Building No-392, Adarsh Nagar, Jalandhar - 144001, Near Kapurthala Chowk";
        img5.setAttribute("src", "img/o5.jpg");

    }

    else if (disease === "Gastric") {
        noneClass();
        // console.log("gastric Disease");
        heading1.innerHTML = "Aggarwal Liver and Gut Superspeciality Hospital ";
        para1.innerHTML = "Mobile: +(91)-7947247830 <br> Address: Building No 275, Jp Nagar, Jalandhar - 144002, Near Bsnl Exchange ";
        img1.setAttribute("src", "img/ga1.jpg");

        heading2.innerHTML = "Healing Touch Gastrosurgery Hospital ";
        para2.innerHTML = "Mobile: +(91)-7947247424 <br> Address: 1 B Golden Avenue Phase 2, Jalandhar City, Jalandhar - 144001, Near Chopra Dry Cleaner ";
        img2.setAttribute("src", "img/ga2.jpg");


        heading3.innerHTML = "MK Arora Hospital";
        para3.innerHTML = "Mobile: +(91)-7087434288 <br> Address: Number 28, Football Chowk, Vijay Nagar, Jalandhar - 144001";
        img3.setAttribute("src", "img/ga3.jpg");


        heading4.innerHTML = "Singhal Gastro Centre";
        para4.innerHTML = "Mobile: +(91)-8725064663 <br> Address: 29, Link Road, Model Town, Jalandhar - 144003, Near Nakodar Chowk, Abadpura";
        img4.setAttribute("src", "img/ga4.jpeg");


        heading5.innerHTML = "Patel Hospital";
        para5.innerHTML = "Mobile: 0181-2041000  <br> Address: Ground Floor, Block A (New Building Patel Hospital, Civil Lines, Jalandhar – 144001 ";
        img5.setAttribute("src", "img/ga5.jpg");

    }

    else if (disease === "Multi-speciality") {
        noneClass();
        // console.log("multi-speciality Disease");
        heading1.innerHTML = "Kamal Multi Speciality Hospital";
        para1.innerHTML = "Mobile: +(91)-9770200017 <br> Address: Main Road, Jalandhar City, Jalandhar - 144001, Near Doaba Chowk  ";
        img1.setAttribute("src", "img/m1.jpg");

        heading2.innerHTML = "Paul Multi speciality hospital";
        para2.innerHTML = "Mobile: +(91)-7947263371 <br> Address: Guru Ravidas Nagar, Jalandhar City, Jalandhar - 144001, Near Ravidas Chowk";
        img2.setAttribute("src", "img/m2.jpg");


        heading3.innerHTML = "Sachar Hospital";
        para3.innerHTML = "Mobile: +(91)-7947409613  <br> Address: Madan Flour Mill Chowk, Central Town, Jalandhar - 144001, Adjacent to Food Bazar";
        img3.setAttribute("src", "img/m3.jpg");


        heading4.innerHTML = "Johal Multi speciality hospital";
        para4.innerHTML = "Mobile: +(91)-9915593902 <br> Address: Hoshiarpur Road, Rama Mandi, Jalandhar - 144005, Near Dhilwan Chowk";
        img4.setAttribute("src", "img/m4.jpg");


        heading5.innerHTML = "Vedanta Multi Speciality Hospital ";
        para5.innerHTML = "Mobile: +(91)-8872578200 <br> Address: Plot 18, G T B Nagar, jalandhar - 144003, Near Guru Ravidass Nagar, Near Manbro Chowk ";
        img5.setAttribute("src", "img/m5.jpg");

    }

}


function noneClass() {
    var list1 = document.getElementById("hospital1");
    var list2 = document.getElementById("hospital2");
    var list3 = document.getElementById("hospital3");
    var list4 = document.getElementById("hospital4");
    var list5 = document.getElementById("hospital5");

    list1.classList.remove("none");
    list2.classList.remove("none");
    list3.classList.remove("none");
    list4.classList.remove("none");
    list5.classList.remove("none");

    list1.scrollIntoView();
}