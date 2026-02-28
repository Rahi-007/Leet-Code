// <!--W_---------------{  Create  Date : 28/02/2026  }---------------_-->
// <!--W_---------------{  Last Update  : 28/02/2026  }---------------_-->
const container = document.getElementById("days");

const currentDay = 1;

for (let i = 1; i <= 10; i++) {
  const day = String(i).padStart(2, "0");

  const div = document.createElement("div");

  const isDisabled = i > currentDay;

  div.innerHTML = `
      <a href="${isDisabled ? "#" : `./src/day_${day}/index.html`}" 
         class="
           font-semibold flex items-center gap-2
           ${
             isDisabled
               ? "opacity-40 cursor-not-allowed pointer-events-none text-gray-400"
               : "hover:text-blue-600"
           }
         ">
        <i class="fa-solid fa-folder"></i>
        Day ${day}
      </a>
    `;

  container.appendChild(div);
}
