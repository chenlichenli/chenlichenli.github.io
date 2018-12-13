using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Creating_French_Male : MonoBehaviour {

    public GameObject FrenchMale;
    Quaternion rotation = new Quaternion(0, 90, 0, 0);


    void Start()
    {
        for (int i = 0; i < 12; i++)
        {

            GameObject newGermanMan = Instantiate<GameObject>(FrenchMale, new Vector3(Random.Range(-30, 30), 0, Random.Range(-30, 30)), rotation);
        }
    }
}
