// <!--W_---------------{  Create  Date : 28/02/2026  }---------------_-->
// <!--W_---------------{  Last Update  : 28/02/2026  }---------------_-->

const container = document.getElementById("days");
const currentDay = 2;

for (let i = 1; i <= 28; i++) {
  const isDisabled = i > currentDay;
  const day = String(i).padStart(2, "0");
  const div = document.createElement("div");

  div.innerHTML = `
      <a href="${isDisabled ? "#" : `./src/day${day}/index.html`}" 
         class="
           flex items-center justify-center gap-2
           p-4 rounded-xl border
           font-semibold text-sm
           transition-all duration-300
           ${
             isDisabled
               ? "opacity-40 cursor-not-allowed pointer-events-none text-gray-400 bg-gray-100"
               : "hover:text-sky-600 hover:bg-sky-50 hover:shadow-md"
           }
         ">
        <i class="fa-solid fa-folder"></i>
        Day ${day}
      </a>
    `;

  container.appendChild(div);
}
