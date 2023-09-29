const express = require('express');

const app = express()


// dashboard api mockup

// userengagement endpoints

app.get('/user-engagement/active-users', (request, response) => {

    // assuming active users is something like this 
    const activeUsers = {
        daily: 10,
        weekly: 100,
        monthly: 1000
    };
    
    
    response.json(activeUsers);
});


app.get('/user-engagement/session', (request, response) => {
    
    const sessionData = {
        duration: 5, 
        screenViews: 5 
        
    };
    response.json(sessionData);
});

app.get('/user-engagement/features', (request, response) => {
    
    const FeaturesData = {
        feature1: 'appFeature1',
        feature2: 'appFeature2',
        
    };
    response.json(FeaturesData);
});



// user acquisition endpoints
app.get('/user-acquisition/acquisition-channels', (request, response) => {
    const  {} = request.body
    
    const acquisitionChannels = {
        organicSearch: 100,
        socialMedia: 100,
        advertisements: 100
        // ...more channels data
    };
    response.json(acquisitionChannels);

});


app.get('/user-retention/retention-rate', (request, response) => {
    

    // i dont really know what it will look like so i am just using numbers for some of this 
    const retentionRate = 70; 
    response.json({ retentionRate });
});


app.get('/user-retention/churn-rate', (request, response ) => {
    
    const churnRate = 15; 
    response.json({ churnRate });

});


app.get('/user-acquisition/new-registrations', (request, response ) => {
   

    const newRegistrations = {
        daily: 10,
        weekly: 100,
        monthly: 1000
    };
    response.json(newRegistrations);
});


app.get('/admin/user-management', (request, response) => {
    
    const userManagementData = {
        users: [
            {
                username: 'admin',
                role: 'Administrator'
            },
        ]
    };
    res.json(userManagementData);
});


app.get('/admin/audit', (request, response ) => {


    const audit = [
        {
            user: 'User1',
            activity: 'Login',
            date: '2023-09'
        },
        {
            user: 'User2',
            activity: 'Logout',
           
        },
    ];

    response.json(audit);
});