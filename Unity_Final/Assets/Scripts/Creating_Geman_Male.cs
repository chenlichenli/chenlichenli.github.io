using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Creating_Geman_Male : MonoBehaviour {

    public GameObject GemanMale;
    Quaternion rotation = new Quaternion(0, 0, 0, 0);


    void Start()
    {
        for (int i = 0; i < 10; i++)
        {

            GameObject newGermanMan = Instantiate<GameObject>(GemanMale, new Vector3(Random.Range(-30, 30), 0, Random.Range(-30, 30)), rotation);
        }
    }


}
