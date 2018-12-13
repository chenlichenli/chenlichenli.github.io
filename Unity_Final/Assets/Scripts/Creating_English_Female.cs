using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Creating_English_Female : MonoBehaviour{

    public GameObject EnglishFemale;

    Quaternion rotation = new Quaternion(0, 0, 0, 0);

    void Start()
    {  
        for (int i = 0; i < 12; i++)
        {
        
            GameObject newFemale = Instantiate<GameObject>(EnglishFemale, new Vector3(Random.Range(-20, 20), 0, Random.Range(-20, 20)), rotation);
        }
    }
}
