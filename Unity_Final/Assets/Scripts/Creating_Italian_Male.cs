using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Creating_Italian_Male : MonoBehaviour {
    public GameObject ItalianMale;
    Quaternion rotation = new Quaternion(0, 90, 0, 0);


    void Start()
    {
        for (int i = 0; i < 3; i++)
        {

            GameObject newItalianMan = Instantiate<GameObject>(ItalianMale, new Vector3(Random.Range(-10, 10), 0, Random.Range(-10, 10)), rotation);
        }
    }
}
