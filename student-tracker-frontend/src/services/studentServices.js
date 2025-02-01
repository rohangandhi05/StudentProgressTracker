// studentService.js
export const getStudentProgress = async (studentId) => {
    const response = await fetch(`http://your-backend-api-url/students/${studentId}/progress`);
    return response.json();
  };
  
  export const updateStudentProgress = async (studentId, progress) => {
    const response = await fetch(`http://your-backend-api-url/students/${studentId}/progress`, {
      method: 'PUT',
      body: JSON.stringify(progress),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  };
  