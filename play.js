let currentTab = 0; // Start with the first tab
        const tabs = ["flowerRun", "chefdom"];

        function showTab(index) {
          // Hide all tab contents
          document.querySelectorAll('.tabcontent').forEach(tab => {
            tab.style.display = 'none';
          });

          // Show the current tab
          document.getElementById(tabs[index]).style.display = 'block';
        }

        function navigateTabs(direction) {
          currentTab += direction;
          if (currentTab >= tabs.length) {
            currentTab = 0; // Loop back to the first tab
          } else if (currentTab < 0) {
            currentTab = tabs.length - 1; // Loop to the last tab
          }
          showTab(currentTab);
        }

        // Initialize the first tab
        document.addEventListener('DOMContentLoaded', () => showTab(currentTab));