
const sections = ['dashboard', 'grades', 'resources', 'hod'];
        const uploadedFiles = [];

        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('href').substring(1);

                if (target === 'hod') {
                    const password = prompt('Enter HOD password:');
                    if (password !== 'secret123') {
                        alert('Access Denied');
                        return;
                    }
                }

                if (target === 'labs') {
                    const teacherPass = prompt('Enter teacher password to access lab booking:');
                    if (teacherPass !== 'teachpass456') {
                        alert('Access Denied');
                        return;
                    } else {
                        document.getElementById('labModal').style.display = 'flex';
                        return; // Don't change section display
                    }
                }

                sections.forEach(sec => {
                    document.getElementById(sec).style.display = (sec === target) ? (sec === 'dashboard' ? 'flex' : 'block') : 'none';
                });
            });
        });

        document.getElementById('uploadBtn').addEventListener('click', function() {
            const pass = prompt('Enter teacher password to upload:');
            if (pass === 'teachpass456') {
                const file = document.getElementById('fileInput').files[0];
                if (file) {
                    uploadedFiles.push(file.name);
                    updateResourceList();
                    alert('Resource "' + file.name + '" uploaded successfully!');
                } else {
                    alert('Please select a file to upload.');
                }
            } else {
                alert('Access Denied. Only authorized teachers can upload resources.');
            }
        });

        function updateResourceList() {
            const listDiv = document.getElementById('resourceList');
            listDiv.innerHTML = '';
            uploadedFiles.forEach(filename => {
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = filename + ' (Download)';
                link.onclick = () => alert('Simulated download of "' + filename + '"');
                listDiv.appendChild(link);
            });
            if (uploadedFiles.length === 0) {
                listDiv.innerHTML = '<p>No resources uploaded yet.</p>';
            }
        }

        document.getElementById('labForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const subject = document.getElementById('subject').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            alert(`Lab booked for ${subject} on ${date} at ${time}`);
            document.getElementById('labModal').style.display = 'none';
        });