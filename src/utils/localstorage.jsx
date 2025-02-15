const employees = [ 
    {
        "id": 1,
        "firstname": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile the monthly sales data and prepare a report for the management.",
                "taskDate": "2025-01-30",
                "category": "Sales"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting Preparation",
                "taskDescription": "Prepare slides for the quarterly team meeting.",
                "taskDate": "2025-01-28",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Weekly Progress Report",
                "taskDescription": "Submit the weekly progress report to the project manager.",
                "taskDate": "2025-01-25",
                "category": "Project Management"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Rajesh",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Inventory",
                "taskDescription": "Ensure all product stocks are updated in the inventory system.",
                "taskDate": "2025-01-29",
                "category": "Inventory Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Order Verification",
                "taskDescription": "Verify the accuracy of recent purchase orders.",
                "taskDate": "2025-01-26",
                "category": "Logistics"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Vendor Communication",
                "taskDescription": "Coordinate with vendors for upcoming product shipments.",
                "taskDate": "2025-01-31",
                "category": "Supplier Relations"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstname": "Suresh",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Feedback Analysis",
                "taskDescription": "Analyze the feedback received from the clients last month and prepare recommendations.",
                "taskDate": "2025-02-01",
                "category": "Client Relations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Client Onboarding",
                "taskDescription": "Assist in onboarding a new client and explain the project scope.",
                "taskDate": "2025-01-20",
                "category": "Client Relations"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Gather data on competitors' services for the next strategy meeting.",
                "taskDate": "2025-02-03",
                "category": "Market Analysis"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstname": "Anil",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Software Update",
                "taskDescription": "Install and test the latest software updates on all systems.",
                "taskDate": "2025-01-30",
                "category": "IT Maintenance"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "System Backup",
                "taskDescription": "Perform a backup of critical systems and data.",
                "taskDate": "2025-01-31",
                "category": "IT Maintenance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Bug Fixing",
                "taskDescription": "Resolve the reported bugs in the internal tools.",
                "taskDate": "2025-01-28",
                "category": "Development"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstname": "Vikram",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Plan and execute the new product launch campaign on all social media platforms.",
                "taskDate": "2025-02-05",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Blog Post",
                "taskDescription": "Write and publish a blog post about our new service offerings.",
                "taskDate": "2025-01-22",
                "category": "Content Marketing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Ad Campaign Review",
                "taskDescription": "Analyze the performance of recent ad campaigns and suggest improvements.",
                "taskDate": "2025-02-02",
                "category": "Advertising"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin=[
    {
        "id": 1,
        "firstname": "admin",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const  setLocalStorege=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
};
export const getLocalStorege=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}; 
};