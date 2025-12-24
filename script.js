// Sample data
let jobs = [
  {
    id: "CJ-1",
    state: "Selected",
    startMethod: "Manual",
    controlOrder: "LIST",
    recipeId: "-",
    carrier: "Carrier 1, Carrier 2",
    parentId: null,
  },
  {
    id: "PJ-1",
    state: "Queued Pooled",
    startMethod: "Manual",
    controlOrder: "",
    recipeId: "Recipe 1",
    carrier: "Carrier 1",
    parentId: "CJ-1",
  },
  {
    id: "PJ-2",
    state: "Queued Pooled",
    startMethod: "Manual",
    controlOrder: "",
    recipeId: "Recipe 2",
    carrier: "Carrier 2",
    parentId: "CJ-1",
  },
  {
    id: "PJ-3",
    state: "Queued Pooled",
    startMethod: "Auto",
    controlOrder: "",
    recipeId: "-",
    carrier: "Carrier 1",
    parentId: null,
  },
];

let selectedJobs = new Set();
let editingJobId = null;
let expandedRows = new Set();
let currentView = "job"; // 'job' or 'material'

// Material view data
let materials = [
  {
    id: "Carrier 1",
    substrateId: "-",
    recipe: "Recipe 1, Recipe 2",
    substrateState: "-",
    jobs: "PJ1, PJ2",
    slots: [
      {
        id: "Slot 1",
        substrateId: "-",
        recipe: "Recipe 1",
        substrateState: "NEEDS PROCESSING",
        jobs: "PJ1",
      },
      {
        id: "Slot 2",
        substrateId: "-",
        recipe: "Recipe 2, Recipe 1",
        substrateState: "-",
        jobs: "PJ2, PJ1",
      },
      {
        id: "Slot 3",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 4",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 5",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 6",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 7",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 8",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 9",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 10",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 11",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 12",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 13",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 14",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 15",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 16",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 17",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 18",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 19",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 20",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 21",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 22",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 23",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 24",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 25",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
    ],
    parentId: null,
  },
  {
    id: "Carrier 2",
    substrateId: "-",
    recipe: "Recipe 1",
    substrateState: "-",
    jobs: "PJ1",
    slots: [
      {
        id: "Slot 1",
        substrateId: "-",
        recipe: "Recipe 1",
        substrateState: "-",
        jobs: "PJ1",
      },
      {
        id: "Slot 2",
        substrateId: "-",
        recipe: "Recipe 1",
        substrateState: "SKIPPED",
        jobs: "PJ1",
      },
      {
        id: "Slot 3",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 4",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 5",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 6",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 7",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 8",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 9",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 10",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 11",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 12",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 13",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 14",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 15",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 16",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 17",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 18",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 19",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 20",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 21",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 22",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 23",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 24",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 25",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
    ],
    parentId: null,
  },
  {
    id: "Carrier 3",
    substrateId: "-",
    recipe: "Recipe 3",
    substrateState: "-",
    jobs: "PJ3",
    slots: [
      {
        id: "Slot 1",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 2",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 3",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 4",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 5",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 6",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 7",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 8",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 9",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 10",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 11",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 12",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 13",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 14",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 15",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 16",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 17",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 18",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 19",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 20",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 21",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 22",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 23",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 24",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
      {
        id: "Slot 25",
        substrateId: "-",
        recipe: "-",
        substrateState: "-",
        jobs: "",
      },
    ],
    parentId: null,
  },
];

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  renderTable();
  initializeEventListeners();
});

function initializeEventListeners() {
  // View toggle
  document.getElementById("viewToggle").addEventListener("click", function () {
    currentView = currentView === "job" ? "material" : "job";
    this.textContent =
      currentView === "job" ? "Switch to Material View" : "Switch to Job View";

    // Toggle filter sections
    const jobFilters = document.getElementById("jobFilters");
    const materialFilters = document.getElementById("materialFilters");
    if (currentView === "job") {
      jobFilters.classList.remove("hidden");
      materialFilters.classList.add("hidden");
    } else {
      jobFilters.classList.add("hidden");
      materialFilters.classList.remove("hidden");
    }

    renderTable();
  });

  // Search functionality
  document.getElementById("searchJobs").addEventListener("input", function (e) {
    renderTable();
  });

  // Filter button
  document
    .getElementById("filterButton")
    .addEventListener("click", function (e) {
      e.stopPropagation();
      const dropdown = document.getElementById("filterDropdown");
      dropdown.classList.toggle("hidden");
    });

  // Close filter dropdown when clicking outside
  document.addEventListener("click", function (e) {
    const filterSection = document.querySelector(".filter-section");
    const dropdown = document.getElementById("filterDropdown");
    if (!filterSection.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });

  // Job filter checkboxes
  document.querySelectorAll(".job-filter-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      renderTable();
    });
  });

  // Material filter checkboxes
  document.querySelectorAll(".material-filter-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      renderTable();
    });
  });

  // Action buttons
  document
    .getElementById("createProcessJob")
    .addEventListener("click", function () {
      showCreateJobView();
    });

  document
    .getElementById("createControlJob")
    .addEventListener("click", function () {
      // Get selected process jobs (only those without parent)
      const selectedProcessJobs = Array.from(selectedJobs).filter((jobId) => {
        const job = jobs.find((j) => j.id === jobId);
        return job && job.id.startsWith("PJ-") && !job.parentId;
      });
      showCreateControlJobView(selectedProcessJobs);
    });

  document.getElementById("deleteJobs").addEventListener("click", function () {
    deleteSelectedJobs();
  });

  document.getElementById("editJobs").addEventListener("click", function () {
    editSelectedJob();
  });

  // Form view controls
  document
    .getElementById("backButton")
    .addEventListener("click", hideCreateJobView);
  document
    .getElementById("cancelJobBtn")
    .addEventListener("click", hideCreateJobView);
  document
    .getElementById("createJobBtn")
    .addEventListener("click", function () {
      // Handle job creation
      createProcessJob();
    });

  // Add Slot Table button
  document
    .getElementById("addSlotTableBtn")
    .addEventListener("click", function () {
      addSlotTable();
    });

  // Start method checkbox handling (only one can be selected)
  const startMethodCheckboxes = document.querySelectorAll(
    'input[name="startMethod"]'
  );
  startMethodCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        startMethodCheckboxes.forEach((cb) => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });

  // Add tuning button
  document
    .getElementById("addTuningBtn")
    .addEventListener("click", function () {
      const tuningRow = document.createElement("div");
      tuningRow.className = "tuning-row";
      tuningRow.innerHTML = `
      <select class="tuning-select">
        <option value="">Select name...</option>
        <option value="Variable 1">Variable 1</option>
        <option value="Variable 2">Variable 2</option>
        <option value="Variable 3">Variable 3</option>
      </select>
      <span>:</span>
      <input type="text" placeholder="value" class="tuning-input" />
    `;
      this.parentElement.insertBefore(tuningRow, this);
    });

  // Control Job Form view controls
  document
    .getElementById("backButtonControl")
    .addEventListener("click", hideCreateControlJobView);
  document
    .getElementById("cancelControlBtn")
    .addEventListener("click", hideCreateControlJobView);
  document
    .getElementById("createControlBtn")
    .addEventListener("click", function () {
      // Handle control job creation
      hideCreateControlJobView();
    });

  // Process Jobs selection change handler
  document
    .getElementById("processJobs")
    .addEventListener("change", function () {
      updateCarrierDisplay();
    });

  // Control Start method checkbox handling
  const controlStartMethodCheckboxes = document.querySelectorAll(
    'input[name="controlStartMethod"]'
  );
  controlStartMethodCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        controlStartMethodCheckboxes.forEach((cb) => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });

  // Mtl Out Spec Mode checkbox handling
  const mtlOutSpecCheckboxes = document.querySelectorAll(
    'input[name="mtlOutSpecMode"]'
  );
  mtlOutSpecCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        mtlOutSpecCheckboxes.forEach((cb) => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });
}

function renderTable() {
  if (currentView === "material") {
    renderMaterialView();
  } else {
    renderJobView();
  }
}

function renderJobView() {
  const tbody = document.getElementById("jobsTableBody");
  const thead = document.querySelector("#jobsTable thead tr");
  const searchTerm = document.getElementById("searchJobs").value.toLowerCase();

  // Update table headers for job view
  thead.innerHTML = `
    <th class="expand-col"></th>
    <th>ID</th>
    <th>State</th>
    <th>Start Method</th>
    <th>Control Order</th>
    <th>Recipe Id</th>
    <th>Carrier (s)</th>
    <th class="checkbox-col"></th>
  `;

  let filteredJobs = jobs;

  // Get selected job states from checkboxes
  const selectedStates = Array.from(
    document.querySelectorAll(".job-filter-checkbox:checked")
  ).map((cb) => cb.value);

  // Filter by selected states
  if (selectedStates.length > 0) {
    filteredJobs = filteredJobs.filter((job) =>
      selectedStates.includes(job.state)
    );
  }

  if (searchTerm) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.id.toLowerCase().includes(searchTerm) ||
        job.state.toLowerCase().includes(searchTerm) ||
        job.carrier.toLowerCase().includes(searchTerm) ||
        job.recipeId.toLowerCase().includes(searchTerm)
    );
  }

  tbody.innerHTML = "";

  // Filter to show only visible jobs (considering parent expansion)
  const visibleJobs = filteredJobs.filter((job) =>
    shouldShowJob(job, filteredJobs)
  );

  visibleJobs.forEach((job) => {
    const row = document.createElement("tr");
    if (selectedJobs.has(job.id)) {
      row.classList.add("selected");
    }

    // Add child class for styling
    if (job.parentId) {
      row.classList.add("child-row");
    }

    const stateClass = getStateClass(job.state);
    const isExpanded = expandedRows.has(job.id);
    const hasChildren = jobs.some((j) => j.parentId === job.id);
    const expandIcon = hasChildren ? (isExpanded ? "▼" : "▶") : "";
    const expandClick = hasChildren
      ? `onclick="toggleExpand('${job.id}')"`
      : "";
    const idIndent = job.parentId ? "<span class='indent'></span>" : "";

    row.innerHTML = `
            <td class="expand-col" ${expandClick}>
              ${expandIcon}
            </td>
            <td>${idIndent}<a href="#" class="job-link">${job.id}</a></td>
            <td><span class="state-badge ${stateClass}">${job.state}</span></td>
            <td>${job.startMethod}</td>
            <td>${job.controlOrder}</td>
            <td><span class="recipe-text">${job.recipeId}</span></td>
            <td>${job.carrier}</td>
            <td class="checkbox-col">
              <input type="checkbox" class="job-checkbox" data-job-id="${
                job.id
              }" ${selectedJobs.has(job.id) ? "checked" : ""}>
            </td>
        `;

    tbody.appendChild(row);

    // Add checkbox event listener
    const checkbox = row.querySelector(".job-checkbox");
    checkbox.addEventListener("change", function (e) {
      if (e.target.checked) {
        selectedJobs.add(job.id);
      } else {
        selectedJobs.delete(job.id);
      }
      updateRowSelection();
    });
  });
}

function renderMaterialView() {
  const tbody = document.getElementById("jobsTableBody");
  const thead = document.querySelector("#jobsTable thead tr");
  const searchTerm = document.getElementById("searchJobs").value.toLowerCase();

  // Update table headers for material view
  thead.innerHTML = `
    <th class="expand-col"></th>
    <th>Material ID</th>
    <th>Substrate ID</th>
    <th>Recipe</th>
    <th>Substrate State</th>
    <th>Jobs</th>
  `;

  let filteredMaterials = materials;

  // Get selected substrate states from checkboxes
  const selectedStates = Array.from(
    document.querySelectorAll(".material-filter-checkbox:checked")
  ).map((cb) => cb.value);

  if (searchTerm) {
    filteredMaterials = filteredMaterials.filter(
      (material) =>
        material.id.toLowerCase().includes(searchTerm) ||
        material.recipe.toLowerCase().includes(searchTerm) ||
        material.jobs.toLowerCase().includes(searchTerm)
    );
  }

  tbody.innerHTML = "";

  filteredMaterials.forEach((material) => {
    const row = document.createElement("tr");

    const isExpanded = expandedRows.has(material.id);
    const hasChildren = material.slots && material.slots.length > 0;
    const expandIcon = hasChildren ? (isExpanded ? "▼" : "▶") : "";
    const expandClick = hasChildren
      ? `onclick="toggleExpandMaterial('${material.id}')"`
      : "";

    row.innerHTML = `
            <td class="expand-col" ${expandClick}>
              ${expandIcon}
            </td>
            <td><a href="#" class="job-link">${material.id}</a></td>
            <td>${material.substrateId}</td>
            <td><span class="recipe-text">${material.recipe}</span></td>
            <td>${
              material.substrateState !== "-"
                ? `<span class="state-badge state-warning">${material.substrateState}</span>`
                : material.substrateState
            }</td>
            <td>${material.jobs}</td>
        `;

    tbody.appendChild(row);

    // Add slots if expanded
    if (isExpanded && hasChildren) {
      material.slots.forEach((slot) => {
        // Filter slots based on selected substrate states
        if (
          slot.substrateState === "-" ||
          selectedStates.includes(slot.substrateState)
        ) {
          const slotRow = document.createElement("tr");
          slotRow.classList.add("child-row");

          slotRow.innerHTML = `
                <td class="expand-col"></td>
                <td><span class='indent'></span><a href="#" class="job-link">${
                  slot.id
                }</a></td>
                <td>${slot.substrateId}</td>
                <td><span class="recipe-text">${slot.recipe}</span></td>
                <td>${
                  slot.substrateState !== "-"
                    ? `<span class="state-badge state-warning">${slot.substrateState}</span>`
                    : slot.substrateState
                }</td>
                <td>${slot.jobs}</td>
            `;

          tbody.appendChild(slotRow);
        }
      });
    }
  });
}

function toggleExpand(jobId) {
  if (expandedRows.has(jobId)) {
    expandedRows.delete(jobId);
  } else {
    expandedRows.add(jobId);
  }
  renderTable();
}

function toggleExpandMaterial(materialId) {
  if (expandedRows.has(materialId)) {
    expandedRows.delete(materialId);
  } else {
    expandedRows.add(materialId);
  }
  renderTable();
}

function shouldShowJob(job, filteredJobs) {
  // Always show top-level jobs
  if (!job.parentId) return true;

  // Show children only if parent is expanded
  const parent = jobs.find((j) => j.id === job.parentId);
  if (!parent) return true;

  // Check if parent is in filtered list and expanded
  const parentInFiltered = filteredJobs.some((j) => j.id === job.parentId);
  return parentInFiltered && expandedRows.has(job.parentId);
}

function getStateClass(state) {
  const stateMap = {
    Selected: "state-selected",
    "Queued Pooled": "state-queued",
    Executing: "state-executing",
    Completed: "state-completed",
  };
  return stateMap[state] || "";
}

function updateRowSelection() {
  const rows = document.querySelectorAll("#jobsTableBody tr");
  rows.forEach((row) => {
    const checkbox = row.querySelector(".job-checkbox");
    if (checkbox.checked) {
      row.classList.add("selected");
    } else {
      row.classList.remove("selected");
    }
  });
}

function showCreateJobView() {
  document.getElementById("createJobView").classList.remove("hidden");
  document.getElementById("createControlJobView").classList.add("hidden");
  document.getElementById("table-container").style.display = "none";

  // Reset form
  document.getElementById("processJobId").value = "";
  document.getElementById("slotTablesContainer").innerHTML = "";
  // Add initial slot table
  addSlotTable();
  document
    .querySelectorAll('input[name="startMethod"]')
    .forEach((cb) => (cb.checked = false));
  document.getElementById("recipe").value = "";
  document.getElementById("pauseEvents").value = "";
}

function hideCreateJobView() {
  document.getElementById("createJobView").classList.add("hidden");
  document.getElementById("table-container").style.display = "block";
}

function createProcessJob() {
  // Get form values
  const processJobId = document.getElementById("processJobId").value.trim();

  if (!processJobId) {
    alert("Please enter a Process Job ID");
    return;
  }

  // Get selected start method
  const startMethodCheckboxes = document.querySelectorAll(
    'input[name="startMethod"]:checked'
  );
  const startMethod =
    startMethodCheckboxes.length > 0
      ? startMethodCheckboxes[0].value
      : "Manual";

  // Get recipe
  const recipe = document.getElementById("recipe").value || "-";

  // Get carrier IDs from slot tables
  const carrierInputs = document.querySelectorAll(".carrier-id-input");
  const carriers = Array.from(carrierInputs)
    .map((input) => input.value.trim())
    .filter((value) => value !== "")
    .join(", ");

  // Create new job object
  const newJob = {
    id: processJobId,
    state: "Selected",
    startMethod: startMethod,
    controlOrder: "",
    recipeId: recipe,
    carrier: carriers || "-",
    parentId: null,
  };

  // Add to jobs array
  jobs.push(newJob);

  // Clear selected jobs
  selectedJobs.clear();

  // Re-render the table
  renderTable();

  // Hide the form and show the table
  hideCreateJobView();
}

function showCreateControlJobView(preSelectedJobs = []) {
  document.getElementById("createControlJobView").classList.remove("hidden");
  document.getElementById("createJobView").classList.add("hidden");
  document.getElementById("table-container").style.display = "none";

  // Populate process jobs dropdown with jobs that have no parent
  populateProcessJobsDropdown(preSelectedJobs);

  // Reset form
  document.getElementById("controlJobId").value = "";
  document.getElementById("dataCollectionPlan").value = "";
  document
    .querySelectorAll('input[name="controlStartMethod"]')
    .forEach((cb) => (cb.checked = false));
  document.getElementById("pauseEventsControl").value = "";
  document.getElementById("processingOrderMgmt").value = "";

  // Pre-select jobs if provided
  const processJobsSelect = document.getElementById("processJobs");
  if (preSelectedJobs.length > 0) {
    Array.from(processJobsSelect.options).forEach((option) => {
      option.selected = preSelectedJobs.includes(option.value);
    });
    // Update carrier display for pre-selected jobs
    updateCarrierDisplay();
  } else {
    processJobsSelect.value = "";
    document.getElementById("carrierDisplay").textContent = "-";
  }
}

function populateProcessJobsDropdown(preSelectedJobs = []) {
  const processJobsSelect = document.getElementById("processJobs");

  // Clear existing options
  processJobsSelect.innerHTML = "";

  // If pre-selected jobs are provided, show only those
  // Otherwise, show all available process jobs
  let availableProcessJobs;
  if (preSelectedJobs.length > 0) {
    availableProcessJobs = jobs.filter(
      (job) =>
        preSelectedJobs.includes(job.id) &&
        job.id.startsWith("PJ-") &&
        !job.parentId
    );
  } else {
    availableProcessJobs = jobs.filter(
      (job) => job.id.startsWith("PJ-") && !job.parentId
    );
  }

  // Add options for each available process job
  availableProcessJobs.forEach((job) => {
    const option = document.createElement("option");
    option.value = job.id;
    option.textContent = job.id;
    processJobsSelect.appendChild(option);
  });
}

function updateCarrierDisplay() {
  const processJobsSelect = document.getElementById("processJobs");
  const carrierDisplay = document.getElementById("carrierDisplay");

  // Get all selected options
  const selectedOptions = Array.from(processJobsSelect.selectedOptions);

  if (selectedOptions.length === 0) {
    carrierDisplay.textContent = "-";
    return;
  }

  // Get the carrier values for selected jobs
  const carriers = selectedOptions
    .map((option) => {
      const jobId = option.value;
      const job = jobs.find((j) => j.id === jobId);
      return job ? job.carrier : null;
    })
    .filter((carrier) => carrier !== null);

  // Display comma-separated carriers
  if (carriers.length > 0) {
    carrierDisplay.textContent = carriers.join(", ");
  } else {
    carrierDisplay.textContent = "-";
  }
}

function hideCreateControlJobView() {
  document.getElementById("createControlJobView").classList.add("hidden");
  document.getElementById("table-container").style.display = "block";
}

let slotTableCounter = 0;

function addSlotTable() {
  slotTableCounter++;
  const container = document.getElementById("slotTablesContainer");

  const tableWrapper = document.createElement("div");
  tableWrapper.className = "slot-table-wrapper";

  const tableDiv = document.createElement("div");
  tableDiv.className = "slot-id-table";

  const headerContainer = document.createElement("div");
  headerContainer.className = "slot-table-header-container";

  const headerInput = document.createElement("input");
  headerInput.type = "text";
  headerInput.className = "carrier-id-input";
  headerInput.placeholder = "Carrier ID";
  headerContainer.appendChild(headerInput);

  // Add remove button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-table-btn";
  removeBtn.innerHTML = "×";
  removeBtn.type = "button";
  removeBtn.onclick = function () {
    removeSlotTable(tableWrapper);
  };
  headerContainer.appendChild(removeBtn);

  tableDiv.appendChild(headerContainer);

  const tableBody = document.createElement("div");
  tableBody.className = "slot-table-body";

  // Header row with master checkbox
  const headerRow = document.createElement("div");
  headerRow.className = "slot-table-header-row";

  const checkboxHeaderCell = document.createElement("div");
  checkboxHeaderCell.className = "slot-table-header-cell";
  const masterCheckbox = document.createElement("input");
  masterCheckbox.type = "checkbox";
  masterCheckbox.className = "master-checkbox";
  masterCheckbox.onchange = function () {
    toggleAllCheckboxes(tableDiv, this.checked);
  };
  checkboxHeaderCell.appendChild(masterCheckbox);
  headerRow.appendChild(checkboxHeaderCell);

  const slotHeaderCell = document.createElement("div");
  slotHeaderCell.className = "slot-table-header-cell";
  slotHeaderCell.textContent = "slot #";
  headerRow.appendChild(slotHeaderCell);

  tableBody.appendChild(headerRow);

  // Create 25 slot rows
  for (let i = 1; i <= 25; i++) {
    const row = document.createElement("div");
    row.className = "slot-table-row";
    row.innerHTML = `
      <div class="slot-table-cell">
        <input type="checkbox" class="slot-checkbox" />
      </div>
      <div class="slot-table-cell">${i}</div>
    `;
    tableBody.appendChild(row);
  }

  tableDiv.appendChild(tableBody);
  tableWrapper.appendChild(tableDiv);
  container.appendChild(tableWrapper);

  updateRemoveButtons();
}

function toggleAllCheckboxes(tableDiv, checked) {
  const checkboxes = tableDiv.querySelectorAll(".slot-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}

function removeSlotTable(tableWrapper) {
  const container = document.getElementById("slotTablesContainer");
  const tables = container.querySelectorAll(".slot-table-wrapper");

  // Only allow removal if there's more than one table
  if (tables.length > 1) {
    tableWrapper.remove();
    updateRemoveButtons();
  }
}

function updateRemoveButtons() {
  const container = document.getElementById("slotTablesContainer");
  const tables = container.querySelectorAll(".slot-table-wrapper");
  const removeButtons = container.querySelectorAll(".remove-table-btn");

  // Hide remove buttons if there's only one table
  removeButtons.forEach((btn) => {
    if (tables.length <= 1) {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  });
}

function handleCarrierSelection() {
  const selectedCarriers = Array.from(
    document.querySelectorAll(".carrier-checkbox:checked")
  ).map((cb) => cb.value);

  const container = document.getElementById("carrierSlotsContainer");
  container.innerHTML = "";

  selectedCarriers.forEach((carrierName) => {
    const carrierDiv = document.createElement("div");
    carrierDiv.className = "carrier-slots-table";

    const header = document.createElement("div");
    header.className = "carrier-slots-header";
    header.textContent = carrierName;
    carrierDiv.appendChild(header);

    const slotsGrid = document.createElement("div");
    slotsGrid.className = "slots-grid";

    // Create 25 slots
    for (let i = 1; i <= 25; i++) {
      const slotItem = document.createElement("div");
      slotItem.className = "slot-item";
      slotItem.innerHTML = `
        <label>Slot# ${i}</label>
        <input type="text" placeholder="Wafer ID" />
      `;
      slotsGrid.appendChild(slotItem);
    }

    carrierDiv.appendChild(slotsGrid);
    container.appendChild(carrierDiv);
  });
}

function openModal(title) {
  editingJobId = null;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("jobForm").reset();
  document.getElementById("jobModal").style.display = "block";
}

function closeModal() {
  document.getElementById("jobModal").style.display = "none";
  editingJobId = null;
}

function saveJob() {
  const jobData = {
    id: document.getElementById("jobId").value,
    state: document.getElementById("jobState").value,
    startMethod: document.getElementById("jobPriority").value,
    controlOrder: document.getElementById("jobList").value,
    recipeId: document.getElementById("jobRecipe").value,
    carrier: document.getElementById("jobCarrier").value,
  };

  if (editingJobId) {
    // Update existing job
    const index = jobs.findIndex((j) => j.id === editingJobId);
    if (index !== -1) {
      jobs[index] = jobData;
    }
  } else {
    // Add new job
    jobs.push(jobData);
  }

  renderTable();
  closeModal();
}

function editJob(jobId) {
  const job = jobs.find((j) => j.id === jobId);
  if (!job) return;

  editingJobId = jobId;
  document.getElementById("modalTitle").textContent = "Edit Job";
  document.getElementById("jobId").value = job.id;
  document.getElementById("jobState").value = job.state;
  document.getElementById("jobPriority").value = job.startMethod;
  document.getElementById("jobList").value = job.controlOrder;
  document.getElementById("jobRecipe").value = job.recipeId;
  document.getElementById("jobCarrier").value = job.carrier;
  document.getElementById("jobPriority").value = job.priority;
  document.getElementById("jobList").value = job.processList;
  document.getElementById("jobRecipe").value = job.recipe;
  document.getElementById("jobCarrier").value = job.carrier;

  document.getElementById("jobModal").style.display = "block";
}

function deleteJob(jobId) {
  if (confirm(`Are you sure you want to delete job ${jobId}?`)) {
    jobs = jobs.filter((j) => j.id !== jobId);
    selectedJobs.delete(jobId);
    renderTable();
  }
}

function deleteSelectedJobs() {
  if (selectedJobs.size === 0) {
    alert("Please select jobs to delete");
    return;
  }

  if (confirm(`Are you sure you want to delete ${selectedJobs.size} job(s)?`)) {
    jobs = jobs.filter((j) => !selectedJobs.has(j.id));
    selectedJobs.clear();
    renderTable();
  }
}

function editSelectedJob() {
  if (selectedJobs.size === 0) {
    alert("Please select a job to edit");
    return;
  }

  if (selectedJobs.size > 1) {
    alert("Please select only one job to edit");
    return;
  }

  const jobId = Array.from(selectedJobs)[0];
  editJob(jobId);
}
