using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_F_Swithcer : MonoBehaviour {

    // Use this for initialization
    public AudioSource E_Female;

    private void OnTriggerEnter(Collider other)
    {


        if (other.CompareTag("Player"))
        {
            Debug.Log("ENTER!");
            E_Female.Play();
        }
    }
}
