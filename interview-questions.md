# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:

You can fix the problem by using a student ID number as primary key in the Student model. You can assign this as the foreign key for the Cohort model. 

  Researched answer:
The foreign key will usually be the primary keys of another table. If the Cohort model was created after the Student model you can use the primary keys in the Student model as the foreign key to the Cohort model. For example a student ID number may have been used as a primary key for the Student model.
 To fix you will have to add another column to Cohort model for the student ID number using migration. And then establish the relationship by adding a belongs_to method.


2. Which RESTful routes must always be passed params? Why?

  Your answer: 

  The create RESTful routes must always be passed params to give protection to the data base. Strong params must be created to define what the user can update.

  

  The above routes must be always passed params so they can pin point to the specific data that needs to be shown, updated, edited or destroyed.

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: 

  model - creates rails files for model generator

  controller - creates controller under the name and establishes a path

  scaffold - creates model,database migration for that model, controllers to manipulate it, views, and a test suite to test each of the above.

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          

method: index  Action: read data at students

action: "POST"   location: /students    

method: create  Action: create data at students

action: "GET"    location: /students/new

method: new  Action: show a form to input new data for a student

action: "GET"    location: /students/2  

method: read  Action: read data at students/2

action: "GET"    location: /students/2/edit    

method: edit  Action: read data at students/2 where the change will be done

action: "PATCH"  location: /students/2      

method: update  Action: update data at students/2

action: "DELETE" location: /students/2      

method: destroy  Action: delete data at students/2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


As a user I can create an initial list to my do list which includes a task, a description of the task, and deadline for completing the task.

As a user I can initially designate a status as incomplete on a task.

As a user I can add additional task or tasks to my list.

As a user i can designate status as completed.

As a user I can generate a list of my tasks with the status of completion

As a user I can generate a list of my task that are not yet completed and over the deadline set.

As a user I can delete a task from my list that has been completed.

As a user I can generate a list of task that has today's date as deadline.

As a user I can generate a list of task that has a specific date as deadline.

As a user I can change the date of the deadline for a task.