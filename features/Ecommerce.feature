Feature: Ecommerce validation

    @PassedUsers
    Scenario Outline: Placing an order
        Given Login to Ecommerce application with "<username>" and "<password>"
        When Verify he login is passed
        Then Add product "<productName>" to cart

        Examples:
            | username                | password     | productName              |
            | standard_user           | secret_sauce | Sauce Labs Backpack      |
            | problem_user            | secret_sauce | Sauce Labs Bike Light    |
            | performance_glitch_user | secret_sauce | Sauce Labs Fleece Jacket |
            | error_user              | secret_sauce | Sauce Labs Bolt T-Shirt  |
            | visual_user             | secret_sauce | Sauce Labs Onesie        |


    @FailedUsers
    Scenario Outline: Placing an order - Invalid user
        Given Login to Ecommerce application with failed credentials "locked_out_user" and "secret_sauce"
        Then Verify he login failed


