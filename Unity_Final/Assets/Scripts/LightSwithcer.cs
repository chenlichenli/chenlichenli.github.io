using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LightSwithcer : MonoBehaviour {

    public AudioSource E_Male;

    private void OnTriggerEnter(Collider other)
    {


        if(other.CompareTag("Player"))
        {
            Debug.Log("ENTER!");
            E_Male.Play();
        }
    }

}
