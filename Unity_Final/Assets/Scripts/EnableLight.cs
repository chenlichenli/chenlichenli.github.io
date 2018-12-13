using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnableLight : MonoBehaviour {

    void Start(){
        this.GetComponent<AudioSource>().enabled = false;
    }

    void Update(){

        if (this.GetComponent<ProximityCheck>().CheckDistance()==true){
            this.GetComponent<AudioSource>().enabled = true;
        } else{
            this.GetComponent<AudioSource>().enabled = false;
        }
    }

}
