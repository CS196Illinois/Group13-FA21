**Research: Dynamic Behavior of Predator vs Prey**

In the following reasearch I will recount two articles, one with a two predator vs. one prey & a simpler predator vs. prey model.**

**What I found**

**In the first research paper it focuses on the “Leslie-Gower predator-prey model” with completion on predator. Prior to delving into it, I hoped it would give me a better understanding of predators (since in this case there are two.) In the examples presented between 2 predators vs 1 prey, there are four equilibrium points (even for an odd amount of animals.) Here are the four equilibrium points:**



**1. The extinction of the first predator population point**

**& The extinction of the second predator and the interior point**

**(The analysis shows that the predator population were never extinct together i.e. both 0 population.**



**2 & 3 e.q points are local asymptotic parts.**



**4. Another equilibrium point due to a set parameter**

**(In our project we might see a parameter play a role in an equilibrium point)**



**Intersting:**

**“The dynamic behaviour of predator-prey model depends on many**

**factors, such as mortality rates, environmental conditions, and competition on predator populations”**



**- Two predators + fight over the prey, so in a way this is a 2 - variable completion, since the prey can just be a constant (or can change dynamics**

- **This can help us model our own, since the prey and predator populations will change (another 2 - var) in terms of the main things we are trying to track.**



**“prey-predator model with carrying capacity of the predator is proportional to the number of prey” therefore this relationship is bounded upon the food, which we can change with the parameters.**



**X = prey**

**Y1 = predator 1**

**Y2 = predator 2**

**(This model is fairly complex) perhaps we might use a logistics equation to model the population.**

In summary this simplifies the above equation in terms of its parameters. In essence this is a parameterization of the vars.



\- In nature the prey typically contains the higher growth rate, while in nature the prey typically has a slower growth rate. However both are proportional to each other.



\- An example of this would be like Wolves vs. bunnies, the bunnies reproduce very quickly, while the wolves take much longer.



\- However both are related to each other.



**We can define the equilibrium point as dx/dt = dy/dt in our case where x = prey and y = predator**



**——**



**Second article:**



**“Depending on their specific settings of applications, they can take the forms of resource-consumer, plant-herbivore, parasite-host, tumor cells (virus)-immune system, susceptible-infectious interactions”**



**In our project we will have an herbivore, and a carnivorous predator.**



**In essence the article goes over different equations that can used to model different scenarios of predator vs prey calculations.**



**- A General Predator-Prey Model (possible we could use this)**

**- Lotka-Volterra Model (another possibility)**

**- Kermack-McKendrick Model (will not use this this if for infection / parasites)**

**- Jacob-Monod Model (will not use, this is for bacteria where they take up resources, but don’t “kill” each other essentially.**

**- Logistic Equation (another possibility)**

**- Predation with Time Delays: Chaos in Ricker's Reproduction Equation (we could just have reproduction as a constant, that the user could change, therefore we might not need this, but can analyze the difference)**

**List of Links:**



**- 1**

**A Dynamics Behaviour of Two Predators and One Prey Interaction with Competition Between Predators:**

**https://iopscience.iop.org/article/10.1088/1757-899X/546/5/052069/pdf**



**-2**

**Predator-prey model**

**http://www.scholarpedia.org/article/Predator-prey_model**







**# How this can be used in the context of the project**





**Both articles present very complex models that take into to account different prior judgements. I have narrowed down to a few models that we can use:**



**General model, using derivatives**

**Lotka-Volterra Model (this only takes into account the growth rates of the two species)**

**Logistics Equation for population, I think this is an easier one to implement, but the general model seems more interesting to me.**