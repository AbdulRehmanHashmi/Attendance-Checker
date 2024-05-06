function markAttendance() {
    const employeeName = document.getElementById('employeeName').value;
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const attendanceTime = currentHour + (currentMinutes / 100); 
  
    var message = '';
  
    if (attendanceTime <= 10) {
      message = 'On time';
    } else if (attendanceTime <= 10.05) {
      message = 'Late (Warning)';
    } else {
      message = 'Late (Salary deduction)';
    }
  
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.textContent = `${employeeName} - ${message}`;
    if (message === 'Late (Warning)') {
      listItem.classList.add('warning');
    } else if (message === 'Late (Salary deduction)') {
      listItem.classList.add('late');
    }
    list.appendChild(listItem);
    document.getElementById('employeeName').value = ''; 
  }
  