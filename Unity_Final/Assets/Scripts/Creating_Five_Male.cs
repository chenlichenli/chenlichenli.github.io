using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Creating_Five_Male : MonoBehaviour {

    public GameObject FiveMale;
    Quaternion rotation = new Quaternion(0, 90, 0, 0);


    void Start()
    {
        for (int i = 0; i < 5; i++)
        {

            GameObject newFiveMan = Instantiate<GameObject>(FiveMale, new Vector3(Random.Range(-10, 15), 0, Random.Range(-15, 10)), rotation);
        }
    }
}
