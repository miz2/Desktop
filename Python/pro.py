import pandas as pd
import numpy as np
import sys
import csv


# df= pd.read_csv("C:\\Users\PMD1\Desktop\EAV.csv",index_col='UID')
# df2=df.to_csv("C:\\Users\PMD1\Desktop\EAV.csv",columns=['Pname','DOB','DOD','Bp','Dp'])
fields = ['UID','Pname','DOB','DOD','Bp','Dp',]
filename = 'EAV.csv'
      
              
print("----------------------------------------------------------------------------------")

    
def main():
    pw=()
  
    print("Welcome to the Project")
    print("-------------------------------------------------------------")
    print("                                                             ")
    print("            DEATH ANDBIRTH RECORDS DBMS                         ")
    print("                    =============                           ")
    print("                                                             ")
    print("                   USING CSV FILE                     ")
    print("         ===================================          ")
    print("                                                             ")
    print("-------------------------------------------------------------")
    pw=input("Please Enter the Password: ")                                       
    
    if (pw=="eben"):
        print("Correct Password")
        print()
        intro()
        Project()  
        
    else:
        print("Incorrect Password ")
        print("Please! Try Again ")
        print()
        print()
        main()

def intro():
    print("Welcome to the project using CSV and Graph\n")


def Project():
    YC=0
    print("#1. Know about the project.")
    print("#2. For checking the data.")
    print("#3. Add a new record.")
    print("#4. Delete a record.")
    print("#5. Update a record.")
    print("#6. Show Graph.")
    print("#7. For Exit.")
    print("===============")
    YC = int(input("\nEnter Your Choice: "))
    if YC==1:
        about()
    if YC == 2:
        Read_CSV()
        
    elif YC==3:
        add()
     
    elif YC==4:
        deleteRow()
 
    elif YC==5:
        updateRow()

    elif YC == 6:
        showgraph()
      
    elif YC == 7:
        print("Thank You for using...")
    else:
        print("Enter valid input")
        replayMenu()
            
            
def add():
    import pandas as pd
    from csv import writer
    #print(pd.read_csv("C:\\Users\PMD1\Desktop\EAV.csv",index_col="UNO"))
    UID=input("ENTER UNO : ")
    Pname=input("ENTER NAME : ")
    DOB=input("ENTER DATE OF BIRTH : ")
    DOD=input("ENTER DATE OF DEATH : ")
    Bp=input("ENTER BIRTH PLACE : ")
    Dp=input("ENTER DEATH PLACE : ")
    data_list = [UID,Pname,DOB,DOD,Bp,Dp]
    with open(filename, 'a') as f_object: 
      writer_object = writer(f_object) 
      writer_object.writerow(data_list)  
      f_object.close()
    replayMenu()      



def Read_CSV():
    import pandas as pd
    print("The Data")
    df=pd.read_csv("C:\\Users\PMD1\Desktop\EAV.csv")
    print(df)
    replayMenu()

def deleteRow():
    d=input("UID to be deleted : ")
    l=[]
    with open('EAV.csv','rt')as f:
      data = csv.reader(f)
      for row in data:
        if row[0]!=d:
          l.append(row)
    with open('EAV.csv', 'w', newline='') as file:
       writer = csv.writer(file)
       writer.writerows(l)
    replayMenu()
      

def updateRow(): 
    d=input("UID to be updated : ")
    l=[]
    with open('EAV.csv','rt')as f:
      data = csv.reader(f)
      for row in data:
        if row[0]!=d:
          l.append(row) 
        else:
          l1=[]
          l1.append(row[0])
          l1.append(row[1])
          l1.append(row[2])
          l1.append(row[3])
          l1.append(row[4])
          l1.append(row[5])
  
          print(" 1. Change Name") 
          print(" 2. Change DOB") 
          print(" 3. Change DOD") 
          print(" 4. Change BirthPlace") 
          print(" 5. Change DeathPlace") 
          i=int(input("Enter choice :"))
          if i==1:
            name=input("Enter name : ") 
            l1[1]=name
          elif i==2:
            name=input("Enter DOB : ") 
            l1[2]=name
          elif i==3:
            name=input("Enter DOD : ") 
            l1[3]=name
          elif i==4:
            name=input("Enter BirthPlace : ") 
            l1[4]=name
          elif i==5:
            name=input("Enter Deathplace : ") 
            l1[5]=name 
          l.append(l1)
         
            
    with open('EAV.csv', 'w', newline='') as file:
       writer = csv.writer(file)
       writer.writerows(l)
    replayMenu()

 
def replayMenu():
    startover = ""
    startover = input("\n\nWould you like to go to MAIN MENU, y or n ?  ")
    while startover.lower() != "y":
        print("Thanks for using this Program! ")
        break
    else:
        Project()


def about():
    print()
    print("This project is about DEATH AND BIRTH RECORDS DBMS")
    print()
    print("Using PYTHON and CSV FILE")
    print()
    print()
    print("THANK YOU")
    
  
    
 
    
    
    
    

def showgraph():  
    import matplotlib.pyplot as plt 
    import numpy as np
    dob={}
    dod={}
    l=[]
    with open('EAV.csv','rt')as f:
      data = csv.reader(f)
      for row in data:
          l.append(row[3])
    for row in l[1:]:
       x= row.split('/')
       a=x[2]
       if a in dod:
           dod[a]+=1
       else:
           dod[a]=1    
    year1=[]
    count1=[]
    for i in dod:
        year1.append(i)
        count1.append(dod[i])
        
    l=[]
    with open('EAV.csv','rt')as f:
      data = csv.reader(f)
      for row in data:
          l.append(row[2])
    for row in l[1:]:
       x= row.split('/')
       a=x[2]
       if a in dob:
           dob[a]+=1
       else:
           dob[a]=1    
    
    year=[]
    count=[]
    for i in dob:
        year.append(i)
        count.append(dob[i])
    year.sort()
    count.sort()    
    year1.sort()
    count1.sort()       
    # plt.plot(year,count,color='blue',label='BIRTHRECORD',linestyle='dashed', linewidth = 3,marker='o', markerfacecolor='blue', markersize=12)
    # plt.plot(year1,count1,color='red',label='DEATHRECORD',linestyle='dashed',linewidth = 3,marker='o', markerfacecolor='red', markersize=12)
    # plt.xlabel('BIRTH/DEATH YEAR') 
    # plt.ylabel('COUNT IN EACH YEAR') 
    # plt.legend()
    # plt.show()
    plt.bar(year,count,color='green',label='BIRTHRECORD')
    plt.bar(year1,count1,color='red',label='DEATHRECORD')
    plt.xticks(np.arange(len(year)+len(year1)),year+year1,rotation=45)
    
    plt.xlabel('BIRTH/DEATH YEAR') 
    plt.ylabel('COUNT IN EACH YEAR') 
    plt.legend()
    plt.title("BIRTH/DEATH RECORD GRAPH")
   
    plt.show()    
    replayMenu()


main()