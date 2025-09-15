Feature: Ecommerce validation

    @PassedUsers
    Scenario Outline: Placing an order
        Given I login to the application with "<username>" and "<password>"
        When login should be successful
        Then I add "<productName>" to the cart

        Examples:
            | username                | password     | productName              |
            | standard_user           | secret_sauce | Sauce Labs Backpack      |
            | problem_user            | secret_sauce | Sauce Labs Bike Light    |
            | performance_glitch_user | secret_sauce | Sauce Labs Fleece Jacket |
            | error_user              | secret_sauce | Sauce Labs Bolt T-Shirt   |
            | visual_user             | secret_sauce | Sauce Labs Onesie        |


   

