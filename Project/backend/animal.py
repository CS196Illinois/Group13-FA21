from test import program
from predator import predator
from prey import prey

def main:
    turn = 0;
    currentProgram = program(predatorT, preyR, Tpopulation, Rpopulation)
    allpredators = predator[]
    allpreys = prey[]
    for i in range(0,program.predatorPopulation, 1): 
        allpredators.append(program.predator)
    for i in range(0,program.preyPopulation, 1)
        allpreys.append(program.prey)
    
    for i in range(0,program.predatorPopulation, 1)
        for t in allpredators:
            t.move()

main()