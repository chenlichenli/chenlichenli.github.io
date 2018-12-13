using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Creating_Danish_Male : MonoBehaviour {

    public GameObject DanishMale;
    Quaternion rotation = new Quaternion(0, 90, 0, 0);


    void Start()
    {
        for (int i = 0; i < 8; i++)
        {

            GameObject newDanishMan = Instantiate<GameObject>(DanishMale, new Vector3(Random.Range(-10, 15), 0, Random.Range(-15, 10)), rotation);
        }
    }
}
