Feature: Invalid credentials
    User tries to login with wrong or invalid credentials


    Scenario Outline: Login fails with invalid credentials
        Given I login to the Ecommerce application with "<username>" and "<password>"
        Then I should see an message "<error>"

        Examples:
            | username     | password      | error                                                                     |
            |              | secret_sauce  | Epic sadface: Username is required                                        |
            | problem_user |               | Epic sadface: Password is required                                        |
            | visual_uuser | secret_sauce  | Epic sadface: Username and password do not match any user in this service |
            | visual_user  | secret_saucer | Epic sadface: Username and password do not match any user in this service |

 @FailedUsers
    Scenario Outline: Placing an order - Invalid user
        Given I login to the Ecommerce application with invalid credentials "locked_out_user" and "secret_sauce"
        Then login should fail with an error message

