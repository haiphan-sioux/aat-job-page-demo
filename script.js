// Sample data
let jobs = [
  {
    id: "CJ-1",
    state: "SELECTED",
    startMethod: "Manual",
    controlOrder: "LIST",
    recipeId: "-",
    carrier: "Carrier 1, Carrier 2",
    parentId: null,
  },
  {
    id: "PJ-1",
    state: "QUEUED POOLED",
    startMethod: "Manual",
    controlOrder: "",
    recipeId: "Recipe 1",
    carrier: "Carrier 1",
    parentId: "CJ-1",
  },
  {
    id: "PJ-2",
    state: "QUEUED POOLED",
    startMethod: "Manual",
    controlOrder: "",
    recipeId: "Recipe 2",
    carrier: "Carrier 2",
    parentId: "CJ-1",
  },
  {
    id: "PJ-3",
    state: "QUEUED POOLED",
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
        substrateState: "NEEDS PROCESSING",
        jobs: "PJ2, PJ1",
      },
      {
        id: "Slot 3",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 4",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 5",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 6",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 7",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 8",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 9",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 10",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 11",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 12",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 13",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 14",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 15",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 16",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 17",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 18",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 19",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 20",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 21",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 22",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 23",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 24",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 25",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
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
        substrateState: "NEEDS PROCESSING",
        jobs: "PJ1",
      },
      {
        id: "Slot 2",
        substrateId: "-",
        recipe: "Recipe 1",
        substrateState: "NEEDS PROCESSING",
        jobs: "PJ1",
      },
      {
        id: "Slot 3",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 4",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 5",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 6",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 7",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 8",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 9",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 10",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 11",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 12",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 13",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 14",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 15",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 16",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 17",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 18",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 19",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 20",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 21",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 22",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 23",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 24",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 25",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
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
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 2",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 3",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 4",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 5",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 6",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 7",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 8",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 9",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 10",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 11",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 12",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 13",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 14",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 15",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 16",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 17",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 18",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 19",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 20",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 21",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 22",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 23",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 24",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
        jobs: "",
      },
      {
        id: "Slot 25",
        substrateId: "-",
        recipe: "-",
        substrateState: "NEEDS PROCESSING",
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
      updateJobFilterAllCheckbox();
    });
  });

  // Job filter "All" checkbox
  const jobFilterAll = document.getElementById("jobFilterAll");
  if (jobFilterAll) {
    jobFilterAll.addEventListener("change", function () {
      const isChecked = this.checked;
      document.querySelectorAll(".job-filter-checkbox").forEach((checkbox) => {
        checkbox.checked = isChecked;
      });
      renderTable();
    });
  }

  // Material filter checkboxes
  document.querySelectorAll(".material-filter-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      renderTable();
      updateMaterialFilterAllCheckbox();
    });
  });

  // Material filter "All" checkbox
  const materialFilterAll = document.getElementById("materialFilterAll");
  if (materialFilterAll) {
    materialFilterAll.addEventListener("change", function () {
      const isChecked = this.checked;
      document
        .querySelectorAll(".material-filter-checkbox")
        .forEach((checkbox) => {
          checkbox.checked = isChecked;
        });
      renderTable();
    });
  }

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
      createControlJob();
    });

  // Process Jobs dropdown handler
  const processJobsDisplay = document.getElementById("processJobsDisplay");
  const processJobsOptions = document.getElementById("processJobsOptions");

  processJobsDisplay.addEventListener("click", function (e) {
    e.stopPropagation();
    processJobsOptions.classList.toggle("open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    processJobsOptions.classList.remove("open");
  });

  processJobsOptions.addEventListener("click", function (e) {
    e.stopPropagation();
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

  // Sort jobs so parents appear immediately before their children
  const sortedJobs = [];
  const processedIds = new Set();

  filteredJobs.forEach((job) => {
    // Skip if already processed (as a child)
    if (processedIds.has(job.id)) return;

    // Add parent job (or standalone job without parent)
    if (!job.parentId) {
      sortedJobs.push(job);
      processedIds.add(job.id);

      // Immediately add all children of this parent
      filteredJobs.forEach((childJob) => {
        if (childJob.parentId === job.id && !processedIds.has(childJob.id)) {
          sortedJobs.push(childJob);
          processedIds.add(childJob.id);
        }
      });
    }
  });

  // Filter to show only visible jobs (considering parent expansion)
  const visibleJobs = sortedJobs.filter((job) =>
    shouldShowJob(job, sortedJobs)
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

// Helper function to get Load Port from Material/Carrier ID
function getLoadPort(materialId) {
  // Extract carrier number from materialId (e.g., "Carrier 1" -> "1")
  const match = materialId.match(/Carrier\s+(\d+)/i);
  if (match && match[1]) {
    return `Load Port ${match[1]}`;
  }
  return "-";
}

function renderMaterialView() {
  const tbody = document.getElementById("jobsTableBody");
  const thead = document.querySelector("#jobsTable thead tr");
  const searchTerm = document.getElementById("searchJobs").value.toLowerCase();

  // Update table headers for material view
  thead.innerHTML = `
    <th class="expand-col"></th>
    <th>Material ID</th>
    <th>Load Port</th>
    <th>Substrate ID</th>
    <th>Substrate State</th>
    <th>Recipe</th>
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
            <td>${getLoadPort(material.id)}</td>
            <td>${material.substrateId}</td>
            <td>${
              material.substrateState !== "-"
                ? `<span class="state-badge state-warning">${material.substrateState}</span>`
                : material.substrateState
            }</td>
            <td><span class="recipe-text">${material.recipe}</span></td>
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
                <td></td>
                <td>${slot.substrateId}</td>
                <td>${
                  slot.substrateState !== "-"
                    ? `<span class="state-badge state-warning">${slot.substrateState}</span>`
                    : slot.substrateState
                }</td>
                <td><span class="recipe-text">${slot.recipe}</span></td>
                <td>${slot.jobs}</td>
            `;

          tbody.appendChild(slotRow);
        }
      });
    }
  });
}

function updateJobFilterAllCheckbox() {
  const jobFilterAll = document.getElementById("jobFilterAll");
  if (jobFilterAll) {
    const allCheckboxes = document.querySelectorAll(".job-filter-checkbox");
    const checkedCheckboxes = document.querySelectorAll(
      ".job-filter-checkbox:checked"
    );
    jobFilterAll.checked = allCheckboxes.length === checkedCheckboxes.length;
  }
}

function updateMaterialFilterAllCheckbox() {
  const materialFilterAll = document.getElementById("materialFilterAll");
  if (materialFilterAll) {
    const allCheckboxes = document.querySelectorAll(
      ".material-filter-checkbox"
    );
    const checkedCheckboxes = document.querySelectorAll(
      ".material-filter-checkbox:checked"
    );
    materialFilterAll.checked =
      allCheckboxes.length === checkedCheckboxes.length;
  }
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

  // Reset edit mode
  editingJobId = null;
  document.querySelector("#createJobView .form-header h2").textContent =
    "Create Process Job";
  document.getElementById("createJobBtn").textContent = "Create";
  document.getElementById("processJobId").readOnly = false;
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

  // Get carrier IDs and slot information from slot tables
  const carrierInputs = document.querySelectorAll(".carrier-id-input");
  const carriers = Array.from(carrierInputs)
    .map((input) => input.value.trim())
    .filter((value) => value !== "")
    .join(", ");

  // Collect slot data
  const slots = [];
  document.querySelectorAll(".slot-id-table").forEach((table) => {
    const carrierId = table.querySelector(".carrier-id-input").value.trim();
    const checkboxes = table.querySelectorAll(".slot-checkbox:checked");
    checkboxes.forEach((cb) => {
      const row = cb.closest(".slot-table-row");
      const slotNumber = row
        .querySelector(".slot-table-cell:nth-child(2)")
        .textContent.trim();
      if (carrierId) {
        slots.push({ carrierId, slotNumber });
      }
    });
  });

  // Get pause events
  const pauseEvents = document.getElementById("pauseEvents").value || "";

  // Get recipe variable tuning
  const variableTuning = [];
  document.querySelectorAll("#variableTuning .tuning-row").forEach((row) => {
    const nameSelect = row.querySelector(".tuning-select");
    const valueInput = row.querySelector(".tuning-input");
    if (nameSelect && valueInput && nameSelect.value && valueInput.value) {
      variableTuning.push({
        name: nameSelect.value,
        value: valueInput.value,
      });
    }
  });

  if (editingJobId) {
    // Update existing job
    const job = jobs.find((j) => j.id === editingJobId);
    if (job) {
      job.startMethod = startMethod;
      job.recipeId = recipe;
      job.carrier = carriers || "-";
      job.slots = slots;
      job.pauseEvents = pauseEvents;
      job.variableTuning = variableTuning;
    }
  } else {
    // Create new job object
    const newJob = {
      id: processJobId,
      state: "QUEUED POOLED",
      startMethod: startMethod,
      controlOrder: "",
      recipeId: recipe,
      carrier: carriers || "-",
      parentId: null,
      slots: slots,
      pauseEvents: pauseEvents,
      variableTuning: variableTuning,
    };

    // Add to jobs array
    jobs.push(newJob);
  }

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

  // Reset form
  document.getElementById("controlJobId").value = "";
  document.getElementById("dataCollectionPlan").value = "";
  document
    .querySelectorAll('input[name="controlStartMethod"]')
    .forEach((cb) => (cb.checked = false));
  document.getElementById("pauseEventsControl").value = "";
  document.getElementById("processingOrderMgmt").value = "";

  // Populate process jobs dropdown
  populateProcessJobsDropdown(preSelectedJobs);

  // Update material redirection table
  updateMaterialRedirection();
}

function populateProcessJobsDropdown(preSelectedJobs = []) {
  const optionsContainer = document.getElementById("processJobsOptions");
  optionsContainer.innerHTML = "";

  // Get available process jobs (no parent)
  const availableJobs = jobs.filter(
    (job) => job.id.startsWith("PJ-") && !job.parentId
  );

  availableJobs.forEach((job) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "dropdown-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `pj-checkbox-${job.id}`;
    checkbox.value = job.id;
    checkbox.checked = preSelectedJobs.includes(job.id);

    checkbox.addEventListener("change", function () {
      updateProcessJobsDisplay();
      updateCarrierDisplay();
      updateMaterialRedirection();
    });

    const label = document.createElement("label");
    label.htmlFor = `pj-checkbox-${job.id}`;
    label.textContent = job.id;
    label.style.cursor = "pointer";
    label.style.flex = "1";

    optionDiv.appendChild(checkbox);
    optionDiv.appendChild(label);
    optionsContainer.appendChild(optionDiv);
  });

  // Update display and carrier
  updateProcessJobsDisplay();
  updateCarrierDisplay();
}

function updateProcessJobsDisplay() {
  const checkboxes = document.querySelectorAll(
    '#processJobsOptions input[type="checkbox"]:checked'
  );
  const display = document.getElementById("processJobsDisplay");

  if (checkboxes.length === 0) {
    display.textContent = "Select process jobs...";
  } else {
    const selected = Array.from(checkboxes).map((cb) => cb.value);
    display.textContent = selected.join(", ");
  }
}

function updateCarrierDisplay() {
  const checkboxes = document.querySelectorAll(
    '#processJobsOptions input[type="checkbox"]:checked'
  );
  const carrierDisplay = document.getElementById("carrierDisplay");

  if (checkboxes.length === 0) {
    carrierDisplay.textContent = "-";
    return;
  }

  // Get job IDs from checked checkboxes
  const jobIds = Array.from(checkboxes).map((cb) => cb.value);

  // Get the carrier values for selected jobs
  const carriers = jobIds
    .map((jobId) => {
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

function updateMaterialRedirection() {
  const checkboxes = document.querySelectorAll(
    '#processJobsOptions input[type="checkbox"]:checked'
  );
  const container = document.getElementById("materialRedirectionTable");

  if (checkboxes.length === 0) {
    container.innerHTML =
      "<p style='color: #999; padding: 10px;'>Select process jobs to see material redirection options</p>";
    return;
  }

  // Get job IDs from checked checkboxes
  const jobIds = Array.from(checkboxes).map((cb) => cb.value);

  // Collect all slots from selected jobs
  const allSlots = [];
  jobIds.forEach((jobId) => {
    const job = jobs.find((j) => j.id === jobId);
    if (job && job.slots && job.slots.length > 0) {
      job.slots.forEach((slot) => {
        allSlots.push({
          label: `${slot.carrierId} - Slot ${slot.slotNumber}`,
          value: `${slot.carrierId}-${slot.slotNumber}`,
        });
      });
    }
  });

  if (allSlots.length === 0) {
    container.innerHTML =
      "<p style='color: #999; padding: 10px;'>Selected process jobs have no slot data</p>";
    return;
  }

  // Generate rows with dropdowns
  let html = '<div class="mtl-spec-row">';
  html += '<div class="mtl-spec-column">';
  html += '<label class="mtl-label">src</label>';

  allSlots.forEach((defaultSlot, index) => {
    html += '<select class="mtl-select mtl-src-select">';
    html += '<option value="">Select...</option>';
    allSlots.forEach((slot) => {
      const selected = slot.value === defaultSlot.value ? " selected" : "";
      html += `<option value="${slot.value}"${selected}>${slot.label}</option>`;
    });
    html += "</select>";
  });

  html += "</div>";
  html += '<div class="mtl-spec-column">';
  html += '<label class="mtl-label">des</label>';

  allSlots.forEach((defaultSlot, index) => {
    html += '<select class="mtl-select mtl-des-select">';
    html += '<option value="">Select...</option>';
    allSlots.forEach((slot) => {
      const selected = slot.value === defaultSlot.value ? " selected" : "";
      html += `<option value="${slot.value}"${selected}>${slot.label}</option>`;
    });
    html += "</select>";
  });

  html += "</div>";
  html += "</div>";

  container.innerHTML = html;
}

function hideCreateControlJobView() {
  document.getElementById("createControlJobView").classList.add("hidden");
  document.getElementById("table-container").style.display = "block";

  // Reset edit mode
  editingJobId = null;
  document.querySelector("#createControlJobView .form-header h2").textContent =
    "Create Control Job";
  document.getElementById("createControlBtn").textContent = "Create";
  document.getElementById("controlJobId").readOnly = false;
}

function createControlJob() {
  // Get form values
  const controlJobId = document.getElementById("controlJobId").value.trim();

  if (!controlJobId) {
    alert("Please enter a Control Job ID");
    return;
  }

  // Get selected process jobs
  const checkboxes = document.querySelectorAll(
    '#processJobsOptions input[type="checkbox"]:checked'
  );
  const selectedProcessJobs = Array.from(checkboxes).map((cb) => cb.value);

  if (selectedProcessJobs.length === 0) {
    alert("Please select at least one process job");
    return;
  }

  // Get carriers from selected process jobs
  const carriers = selectedProcessJobs
    .map((jobId) => {
      const job = jobs.find((j) => j.id === jobId);
      return job ? job.carrier : null;
    })
    .filter((carrier) => carrier !== null);

  // Get other form values
  const dataCollectionPlan =
    document.getElementById("dataCollectionPlan").value || "";
  const processingOrderMgmt = document.getElementById(
    "processingOrderMgmt"
  ).value;
  const pauseEvents = document.getElementById("pauseEventsControl").value || "";

  const startMethodCheckbox = document.querySelector(
    'input[name="controlStartMethod"]:checked'
  );
  const startMethod = startMethodCheckbox ? startMethodCheckbox.value : "";

  if (editingJobId) {
    // Update existing control job
    const job = jobs.find((j) => j.id === editingJobId);
    if (job) {
      job.startMethod = startMethod || "Manual";
      job.controlOrder = processingOrderMgmt || "";
      job.carrier = carriers.join(", ");
      job.dataCollectionPlan = dataCollectionPlan;
      job.pauseEvents = pauseEvents;
    }

    // Clear old parent relationships
    jobs.forEach((j) => {
      if (j.parentId === editingJobId) {
        j.parentId = null;
      }
    });

    // Update parent IDs for selected process jobs
    selectedProcessJobs.forEach((jobId) => {
      const childJob = jobs.find((j) => j.id === jobId);
      if (childJob) {
        childJob.parentId = editingJobId;
      }
    });
  } else {
    // Create the control job
    const newControlJob = {
      id: controlJobId,
      state: "SELECTED",
      startMethod: startMethod || "Manual",
      controlOrder: processingOrderMgmt || "",
      recipeId: "-",
      carrier: carriers.join(", "),
      parentId: null,
      dataCollectionPlan: dataCollectionPlan,
      pauseEvents: pauseEvents,
    };

    // Add control job to jobs array
    jobs.push(newControlJob);

    // Update parent IDs for selected process jobs
    selectedProcessJobs.forEach((jobId) => {
      const job = jobs.find((j) => j.id === jobId);
      if (job) {
        job.parentId = controlJobId;
      }
    });

    // Automatically expand the new control job to show its children
    expandedRows.add(controlJobId);
  }

  // Clear selected jobs
  selectedJobs.clear();

  // Re-render the table
  renderTable();

  // Hide the form and show the table
  hideCreateControlJobView();
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

  // Check if it's a Process Job or Control Job
  if (job.id.startsWith("PJ-")) {
    // Edit Process Job
    document.getElementById("createJobView").classList.remove("hidden");
    document.getElementById("createControlJobView").classList.add("hidden");
    document.getElementById("table-container").style.display = "none";

    // Update form title and button
    document.querySelector("#createJobView .form-header h2").textContent =
      "Edit Process Job";
    document.getElementById("createJobBtn").textContent = "Update";

    // Populate form fields
    document.getElementById("processJobId").value = job.id;
    document.getElementById("processJobId").readOnly = true; // Don't allow ID changes

    // Populate recipe
    document.getElementById("recipe").value = job.recipeId || "";

    // Populate start method
    document
      .querySelectorAll('input[name="startMethod"]')
      .forEach((cb) => (cb.checked = false));
    if (job.startMethod) {
      const checkbox = document.querySelector(
        `input[name="startMethod"][value="${job.startMethod}"]`
      );
      if (checkbox) checkbox.checked = true;
    }

    // Populate pause events
    document.getElementById("pauseEvents").value = job.pauseEvents || "";

    // Populate recipe variable tuning
    const variableTuningContainer = document.getElementById("variableTuning");
    // Remove all existing tuning rows except the add button
    const existingRows =
      variableTuningContainer.querySelectorAll(".tuning-row");
    existingRows.forEach((row) => row.remove());

    if (job.variableTuning && job.variableTuning.length > 0) {
      job.variableTuning.forEach((tuning) => {
        const tuningRow = document.createElement("div");
        tuningRow.className = "tuning-row";
        tuningRow.innerHTML = `
          <select class="tuning-select">
            <option value="">Select name...</option>
            <option value="Variable 1" ${
              tuning.name === "Variable 1" ? "selected" : ""
            }>Variable 1</option>
            <option value="Variable 2" ${
              tuning.name === "Variable 2" ? "selected" : ""
            }>Variable 2</option>
            <option value="Variable 3" ${
              tuning.name === "Variable 3" ? "selected" : ""
            }>Variable 3</option>
          </select>
          <span>:</span>
          <input type="text" placeholder="value" class="tuning-input" value="${
            tuning.value
          }" />
        `;
        variableTuningContainer.insertBefore(
          tuningRow,
          variableTuningContainer.querySelector("#addTuningBtn")
        );
      });
    } else {
      // Add one empty row if no tuning data exists
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
      variableTuningContainer.insertBefore(
        tuningRow,
        variableTuningContainer.querySelector("#addTuningBtn")
      );
    }

    // Populate slots
    document.getElementById("slotTablesContainer").innerHTML = "";
    if (job.slots && job.slots.length > 0) {
      job.slots.forEach((slot) => {
        addSlotTable();
        const slotTables = document.querySelectorAll(".slot-table");
        const lastTable = slotTables[slotTables.length - 1];

        // Find the carrier input and set value
        const carrierInput = lastTable.querySelector(
          ".slot-table-cell input[type='text']"
        );
        if (carrierInput) {
          carrierInput.value = slot.carrierId;
        }

        // Check the slot checkbox
        const slotCell = lastTable.querySelector(
          `.slot-table-cell:has(input[type="checkbox"][value="${slot.slotNumber}"])`
        );
        if (slotCell) {
          const checkbox = slotCell.querySelector('input[type="checkbox"]');
          if (checkbox) checkbox.checked = true;
        }
      });
    } else {
      addSlotTable();
    }
  } else if (job.id.startsWith("CJ-")) {
    // Edit Control Job
    document.getElementById("createControlJobView").classList.remove("hidden");
    document.getElementById("createJobView").classList.add("hidden");
    document.getElementById("table-container").style.display = "none";

    // Update form title and button
    document.querySelector(
      "#createControlJobView .form-header h2"
    ).textContent = "Edit Control Job";
    document.getElementById("createControlBtn").textContent = "Update";

    // Populate form fields
    document.getElementById("controlJobId").value = job.id;
    document.getElementById("controlJobId").readOnly = true; // Don't allow ID changes

    // Get child process jobs
    const childJobs = jobs
      .filter((j) => j.parentId === job.id)
      .map((j) => j.id);

    // Populate process jobs dropdown with pre-selected children
    populateProcessJobsDropdown(childJobs);

    // Populate data collection plan
    document.getElementById("dataCollectionPlan").value =
      job.dataCollectionPlan || "";

    // Populate processing order management
    document.getElementById("processingOrderMgmt").value =
      job.controlOrder || "";

    // Populate start method
    document
      .querySelectorAll('input[name="controlStartMethod"]')
      .forEach((cb) => (cb.checked = false));
    if (job.startMethod) {
      const checkbox = document.querySelector(
        `input[name="controlStartMethod"][value="${job.startMethod}"]`
      );
      if (checkbox) checkbox.checked = true;
    }

    // Populate pause events
    document.getElementById("pauseEventsControl").value = job.pauseEvents || "";

    // Update material redirection
    updateMaterialRedirection();
  }
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
