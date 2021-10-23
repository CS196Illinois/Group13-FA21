from test import program
from predator import predator
from prey import prey

def main:
    turn = 0;
    currentProgram = program(predatorT, preyR, Tpopulation, Rpopulation)
    allpredators = []
    allpreys = []
    for i in range(program.predatorPopulation): 
        allpredators.append(program.predator)
    for i in range(program.preyPopulation):
        allpreys.append(program.prey)
    
    for i in range(program.predatorPopulation):
        for t in allpredators:
            t.move()

main()