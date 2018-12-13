using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Creating_English_Male : MonoBehaviour {

    public GameObject EnglishMale;
    Quaternion rotation = new Quaternion(0,90,0,0);


    void Start()
    {
        for (int i = 0; i < 162; i++)
        {
           
            GameObject newMan = Instantiate<GameObject>(EnglishMale,new Vector3 (Random.Range(-20,20),0,Random.Range(-20,20)),rotation);
        }
    }




}
